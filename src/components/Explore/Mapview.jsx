import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

function MapView({ center, results, selectedPlaceId, onMarkerClick }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_PLACES_API_KEY,
  });

    const mapRef= useRef(null);

    const onLoad=(map)=>{
        mapRef.current= map;
    }

    useEffect(()=>{
        if (!selectedPlaceId || !mapRef.current) return;

        const place = results.find((p, index) => (p.id || index) === selectedPlaceId);
        if (!place) return;

        const position = {
            lat: place.location.latitude,
            lng: place.location.longitude,
        };

        mapRef.current.panTo(position);
        mapRef.current.setZoom(17);
 
    },[selectedPlaceId, results]);

    if (!isLoaded) return <p className="text-white">Loading map...</p>;

    return(
        <GoogleMap
            mapContainerClassName="w-full h-full"
            center={center}
            zoom={14}
            onLoad={onLoad}
            >
            <Marker position={center} label="You" />

            {results.map((place, index) => (
                <Marker
                key={place.id || index}
                position={{
                    lat: place.location.latitude,
                    lng: place.location.longitude,
                }}
                onClick={() => onMarkerClick(place.id || index)}
                />
            ))}
        </GoogleMap>
    );

}
export default MapView;