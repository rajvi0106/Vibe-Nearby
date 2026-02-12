import React, { useState } from "react";

function UseLocation() {
    const [Location,setLocation]=useState(null)
    const [Loading,setLoading]=useState(false)
    const [error,setError]=useState(null);
    const getLocation=()=>{
        setLoading(true);
        
    }
}    