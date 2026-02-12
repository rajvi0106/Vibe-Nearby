import React from "react";


function Home() {    
    return (
        <div className="bg-purple-400 flex justify-between">
            <div className="text-white flex flex-col w-1/2 h-screen">
                <p className="text-7xl ml-10 mt-50 mb-5">Vibe Nearby</p>
                <p className="ml-10">lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore dolorem natus, odit incidunt nobis culpa dolores hic deserunt quam quos aliquid. Esse ipsum praesentium accusamus iste, vero corrupti voluptatem.lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore dolorem natus, odit incidunt nobis culpa dolores hic deserunt quam quos aliquid. Esse ipsum praesentium accusamus iste, vero corrupti voluptatem.</p>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/16856995/pexels-photo-16856995.jpeg" className="h-200 mt-10"></img>
            </div>
            <div></div>
        </div>
    );
}
 export default Home;