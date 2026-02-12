import React from "react";

function LocationPermission() {
    return (
        <div className="p-3">
            <div className="bg-blue-100 mb-4 ml-4 mt-4 mr-4 p-20 rounded-lg text-center">
                <p className="text-center text-3xl">Allow Location Access?</p>
                <br></br>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">Allow</button>
                <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">Deny</button>
            </div>
        </div>
    );
}
export default LocationPermission;  