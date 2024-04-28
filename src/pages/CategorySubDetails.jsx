import { useLoaderData } from "react-router-dom";
import EachSubItemCard from "./EachSubItemCard";

const CategorySubDetails = () => {

    const loadedItems = useLoaderData();
    console.log('ddsss',loadedItems)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
               loadedItems.map((item)=> <EachSubItemCard key={item._id} item={item}></EachSubItemCard>)
            }
        </div>
  
    );
};

export default CategorySubDetails;