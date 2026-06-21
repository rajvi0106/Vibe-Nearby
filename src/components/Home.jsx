import React from "react";


function Home() {    
    return (
        <div className="bg-purple-400 flex justify-between">
            <div className="text-white flex flex-col w-1/2 h-screen">
                <p className="text-7xl ml-10 mt-50 mb-5">Find your vibe, Nearby</p>
                <br></br>
                <br></br>
                <p className="ml-10 text-2xl">Tell us what you're in the mood for , a quick bite, some shopping, a quiet spot to read, or a night out and we'll find real places near you that match. Set your budget, share your location, and get a curated list with ratings, opening hours, and distance, mapped out so you know exactly where to go.</p>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/16856995/pexels-photo-16856995.jpeg" className="h-200 mt-10"></img>
            </div>
            <div></div>
        </div>
    );
}
 export default Home;