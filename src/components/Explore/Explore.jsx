import React from "react";
import MoodSelector from "./MoodSelector";
import BudgetSelector from "./BudgetSelector";
import LocationPermission from "./LocationPermission";

function Explore() {    
    return (
        <>
        <div className="bg-purple-400 h-screen">
            <MoodSelector/>
            <BudgetSelector/>
            <LocationPermission/>
        </div>
        </>
    );
}
export default Explore;    