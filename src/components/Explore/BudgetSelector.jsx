import React from "react";

function BudgetSelector(){

    return(
        <div className="p-3">
            <div className="bg-blue-100 mb-4 ml-4 mt-4 mr-4 p-20 rounded-lg text-center">
                <p className="text-center text-3xl">What is your Budget?</p>
                <br></br>
                <input placeholder="Enter Amount" className=" border-2 border-blue-950 "></input>
            </div>
        </div>
    );                      
}
export default BudgetSelector;