import { useLoaderData } from "react-router-dom";
import EachSubItemCard from "./EachSubItemCard";
import { Helmet } from "react-helmet-async";

const CategorySubDetails = () => {

    const loadedItems = useLoaderData();
    console.log('ddsss',loadedItems)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
             <Helmet>
                 <title>Kraftelle | Sub-Categories</title>
            </Helmet>
            {
               loadedItems.map((item)=> <EachSubItemCard key={item._id} item={item}></EachSubItemCard>)
            }
        </div>
  
    );
};

export default CategorySubDetails;