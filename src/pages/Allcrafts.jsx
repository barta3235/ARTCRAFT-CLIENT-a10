import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachCraft from "./EachCraft";

const Allcrafts = () => {
     
    const loadedCrafts=useLoaderData();
    const [crafts,setcrafts]=useState(loadedCrafts);
    
     
    
    return (
       <div className="grid justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 md:mx-[30px] mx-[7px]">
           {
            crafts.map((craft)=> <EachCraft key={craft._id} craft={craft}></EachCraft>)
           }
       </div>
    );
};

export default Allcrafts;