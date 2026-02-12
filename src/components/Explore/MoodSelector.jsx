import React from "react";


function MoodSelector() { 
    return (
        <div className="pt-4">
            <div className="bg-blue-100 mb-4 ml-4 mr-4 p-4 rounded-lg">
                <p className="text-center text-3xl">Where are you in the mood to go?</p>
                <ul className="text-2xl">
                    <li><label><input type="checkbox" ></input>Food</label></li>
                    <li><label><input type="checkbox" ></input>Read</label></li>
                    <li><label><input type="checkbox" ></input>Shopping</label></li>
                    <li><label><input type="checkbox" ></input>Entertainment</label></li>
                </ul>
            </div>
        </div>
    );
}
export default MoodSelector;