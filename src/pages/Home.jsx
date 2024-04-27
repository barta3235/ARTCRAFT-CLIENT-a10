import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useState } from "react";
import EachCraft from "./EachCraft";

const Home = () => {
    const loadedItems = useLoaderData();
    const [crafts, setCrafts] = useState(loadedItems);
    const slicedCrafts = crafts.slice(0, 6);
    console.log(slicedCrafts);
    return (
        <div>
            <Banner></Banner>
            <div className="grid justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 md:mx-[30px] mx-[7px]">
                {
                    slicedCrafts.map((aCraft) => <EachCraft key={aCraft._id} craft={aCraft}></EachCraft>)
                }
            </div>

        </div>
    );
};

export default Home;