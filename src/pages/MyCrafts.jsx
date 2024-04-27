import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArtDetails from "./MyArtDetails";

const MyCrafts = () => {
    
    const loadedItems=useLoaderData();
    const [myArt,setMyArt]=useState(loadedItems);

    return (
        <div className="grid justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 md:mx-[30px] mx-[7px] mt-[30px]">
            {
                myArt.map((art)=> <MyArtDetails key={art._id} art={art} myArt={myArt} setArt={setMyArt}></MyArtDetails>)
            }
        </div>
    );
};

export default MyCrafts;