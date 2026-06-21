import React from "react";

function PlaceCard({place,isSelected,onClick}){
    const name = place.displayName?.text || "Unnamed place";
    const address = place.formattedAddress || "Address not available";
    const rating = place.rating ?? "No rating";
    const isOpen = place.currentOpeningHours?.openNow;

    return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl p-4 shadow-md text-left transition-colors
        ${isSelected ? "bg-purple-100 border-2 border-purple-500" : "bg-white"}`}
    >
      <h4 className="font-semibold text-lg text-purple-700">{name}</h4>
      <p className="text-sm text-gray-600">{address}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-yellow-600 font-medium">⭐ {rating}</span>
        {isOpen !== undefined && (
          <span className={isOpen ? "text-green-600" : "text-red-600"}>
            {isOpen ? "Open now" : "Closed"}
          </span>
        )}
      </div>
    </div>
  );
}
export default PlaceCard;