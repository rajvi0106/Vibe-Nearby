import React from "react";
import { moodToPlaceType } from "../../constants/moodSelectorconfig";


function MoodSelector({selectedMood, onSelect}) { 
    const moods = Object.keys(moodToPlaceType);

    return (
        <div className="pt-4">
            <div className="bg-blue-100 mb-4 ml-4 mr-4 p-4 rounded-lg">
                <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-black">
                        Where are you in the mood to go?
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {moods.map((mood) => (
                        <label
                            key={mood}
                            className={`cursor-pointer px-5 py-3 rounded-xl border-2 text-center font-medium transition-colors
                            ${
                                selectedMood === mood
                                ? "bg-white text-purple-600 border-white"
                                : "bg-purple-500 text-white border-purple-300 hover:bg-purple-400"
                            }`}
                        >
                            <input
                            type="radio"
                            name="mood"
                            value={mood}
                            checked={selectedMood === mood}
                            onChange={() => onSelect(mood)}
                            className="hidden"
                            />
                            {mood}
                        </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MoodSelector;