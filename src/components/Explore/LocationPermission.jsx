import React from "react";
import { useState } from "react";

function LocationPermission({ mode, onAllow, onDeny, onGeocode, loading, error, location }) {
  const [address, setAddress] = useState("");

  return (
    <div className="bg-blue-100 rounded-2xl shadow-md p-6 mx-4 mt-4 text-center">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Allow Location Access?
      </h3>

      <div className="flex gap-4 justify-center">
        <button
          className="px-6 py-3 rounded-xl border-2 font-medium bg-purple-600 text-white border-purple-600 hover:bg-purple-700 transition-colors"
          onClick={onAllow}
        >
          Allow
        </button>
        <button
          className="px-6 py-3 rounded-xl border-2 font-medium bg-white text-purple-600 border-purple-300 hover:bg-purple-100 transition-colors"
          onClick={onDeny}
        >
          Deny
        </button>
      </div>

      {mode === "manual" && (
        <div className="flex gap-3 justify-center mt-5">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your city or area"
            className="px-4 py-2 rounded-xl border-2 border-purple-300 focus:outline-none focus:border-purple-600"
          />
          <button
            onClick={() => onGeocode(address)}
            className="px-5 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
          >
            Find
          </button>
        </div>
      )}

      {loading && <p className="mt-4 text-purple-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      {location && (
        <p className="mt-4 text-purple-700 font-medium">
          Location: {location.lat}, {location.lng}
        </p>
      )}
    </div>
  );
}

export default LocationPermission;