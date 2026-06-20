import React from "react";
import { useState } from "react";
function LocationPermission({ mode, onAllow, onDeny, onGeocode, loading, error, location }) {
    const [address, setAddress]=useState("")
    return (
        <div className="p-3">
            <div className="bg-blue-100 mb-4 ml-4 mt-4 mr-4 p-20 rounded-lg text-center">
                <p className="text-center text-3xl">Allow Location Access?</p>
                <br></br>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4" onClick={onAllow}>Allow</button>
                <button className="bg-gray-300 text-black px-4 py-2 rounded-lg" onClick={onDeny}>Deny</button>

                {mode=="manual" && (
                    <div>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your city or area"
                    />
                    <button onClick={() => onGeocode(address)}>Find</button>
                    </div>

                )}
                {loading && <p>Loading...</p>}
                {error && <p>error:{error}</p>}
                {location && <p>Location: {location.lat}, {location.lng}</p>}
            </div>
        </div>
    );
}
export default LocationPermission;