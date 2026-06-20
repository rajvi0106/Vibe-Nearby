import React from "react";
import { budgetLevels } from "../../constants/budgetSelectorconfig";

function BudgetSelector({Budget,onBudgetChange}){
    const tiers = Object.keys(budgetLevels);
    return(
        <div className="p-3 ">
            <div className="bg-blue-100 mb-4 ml-4 mt-4 mr-4 p-20 rounded-lg text-center">
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">
                        What is your budget?
                    </h3>

                    <div className="flex gap-4 justify-center">
                        {tiers.map((tier) => (
                        <label
                            key={tier}
                            className={`cursor-pointer px-6 py-3 rounded-xl border-2 text-center font-medium transition-colors
                            ${
                                Budget === tier
                                ? "bg-white text-purple-600 border-white"
                                : "bg-purple-500 text-white border-purple-300 hover:bg-purple-400"
                            }`}
                        >
                            <input
                                type="radio"
                                name="budget"
                                value={tier}
                                checked={Budget === tier}
                                onChange={() => onBudgetChange(tier)}
                                className="hidden"
                            />
                            <div>{tier}</div>
                            <div className="text-xs">{budgetLevels[tier].label}</div>
                        </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );                      
}
export default BudgetSelector;