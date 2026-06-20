import React from "react";
import MoodSelector from "./MoodSelector";
import BudgetSelector from "./BudgetSelector";
import LocationPermission from "./LocationPermission";
import useLocation from "../../hooks/useLocation.js";
import useManualLocation from "../../hooks/useManualLocation.js";
import { useState } from "react";   
import { moodToPlaceType } from "../../constants/moodSelectorconfig.js";
import { budgetLevels, priceLevelRank } from "../../constants/budgetSelectorconfig.js";
function Explore() {  
    const { location: gpsLocation, getLocation, loading: gpsLoading, error: gpsError } = useLocation();
    const { location: manualLocation, geocodeAddress, loading: manualLoading, error: manualError } = useManualLocation();
    const [mode, setMode] = useState(null);
    const [selectedMood, setSelectedMood] = useState(null);
    const [Budget,setBudget] = useState(null);
    const [hasSearched,setHasSearched]=useState(false);
    const [searchloading,setSearchLoading]=useState(false);
    const [searchError,setSearchError] =useState(null);
    const [Results,setResults]=useState([]);

    const finalLocation = mode === "gps" ? gpsLocation : manualLocation;

    const handleAllow = () => {
        setMode("gps");
        getLocation();
    };

  const handleDeny = () => setMode("manual");

  const searchPlaces= async()=>{
    if(!finalLocation || !Budget || !selectedMood) return;

    setSearchLoading(true);
    setHasSearched(true);

    const types=moodToPlaceType[selectedMood];
    const price=budgetLevels[Budget].rank;

    console.log("SEARCHING NEAR:", finalLocation);
    console.log("TYPES BEING SEARCHED:", types);
    console.log("budget:",Budget)
    try {
        const response= await fetch(
            "https://places.googleapis.com/v1/places:searchNearby",

            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": import.meta.env.VITE_PLACES_API_KEY,
                    "X-Goog-FieldMask":
                    "places.displayName,places.formattedAddress,places.rating,places.location,places.currentOpeningHours,places.priceLevel",
                },
                body:JSON.stringify({
                    includedTypes: types,
                     maxResultCount: 10,
                        locationRestriction: {
                            circle: {
                                center: { latitude: finalLocation.lat, longitude: finalLocation.lng },
                                radius: 5000,
                            },
                        },
                })
            }
        );
        if(!response.ok) {
            throw new Error(`API request failed :${response.status}`)
        }

        const data = await response.json();
        const places=data.places || [];
        console.log(data);
        const filtered= places.filter((p)=>{
            if(!p.priceLevel) return true;
            return priceLevelRank[p.priceLevel]<= price;
        })
        setResults(filtered);
        console.log(places);
    } catch (error) {
        setSearchError(error.message);
        setResults([]);
    } finally{
        setSearchLoading(false);
    };

  }
  const canSearch = selectedMood && Budget && finalLocation
    return (
        <>
        <div className="bg-purple-400 h-screen">
            <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood}/>
            <BudgetSelector budget={Budget} onBudgetChange={setBudget}/>
            <LocationPermission
                mode={mode}
                onAllow={handleAllow}
                onDeny={handleDeny}
                onGeocode={geocodeAddress}
                loading={mode === "gps" ? gpsLoading : manualLoading}
                error={mode === "gps" ? gpsError : manualError}
                location={finalLocation}
            />

            <div className="text-center my-6">
                <button
                onClick={searchPlaces}
                disabled={!canSearch || searchloading}
                className={`px-8 py-3 rounded-xl font-semibold transition-colors
                    ${canSearch ? "bg-white text-purple-600 hover:bg-purple-100" : "bg-purple-300 text-purple-100 cursor-not-allowed"}`}
                >
                {searchloading ? "Searching..." : "Find Places"}
                </button>
            </div>

            {searchError && (
                <p className="text-center text-red-200">Error: {searchError}</p>
            )}

            {hasSearched && !searchloading && Results.length === 0 && !searchError && (
                <p className="text-white text-center mt-4">
                No places found nearby for this mood and budget. Try a different combination.
                </p>
            )}
        </div>
        </>
    );
}
export default Explore; 