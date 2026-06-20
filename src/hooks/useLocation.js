import { useCallback, useState } from "react";

function useLocation(){
    const[location,setLocation]=useState(null);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);

    const getLocation =useCallback(()=>{
        if(!navigator.geolocation){
            setError("Geolocation is not supported by your browser");
            return;
        }
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position)=> {
                setLocation({
                    lat:position.coords.latitude,
                    lng:position.coords.longitude,
                })
                setError(null);
                setLoading(false);
            }, 
            (err)=>{
                setError(err.message);
                setLoading(false);
            } 
        );
    },[])
    return { location, loading, error, getLocation};
}
export default useLocation;