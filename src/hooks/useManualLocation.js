import { useCallback, useState } from "react";

function useManualLocation(){
    const[location,setLocation]=useState(null);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);

    const geocodeAddress=async(address)=>{
        setLoading(true);
        try {
            const response= fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.VITE_GOOGLE_GEOCODING_API_KEY}`)
            const data=await response.json();
            if(data.status!=='OK' || data.results.length===0){
                setError("could not fetch location for the provided address");
                setLoading(false);
                return;
            }
            const {lat,lng}=data.results.geometry.location
            setLocation({lat,lng});
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }

    }
    return { location, loading, error, geocodeAddress };
}
export default useManualLocation