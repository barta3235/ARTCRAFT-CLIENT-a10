import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const EachCraft = ({craft}) => {

    const {itemname,subcategory,imageurl,_id,rating}=craft
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">

            <div className="">
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={imageurl} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{itemname}</h3>
                        <h1 className="text-[20px] font-medium">{subcategory}</h1>
                        <h1 className="text-[20px] font-medium flex items-center gap-1">Ratings: {rating}<FaStar className="text-yellow-500"></FaStar></h1>
                    </div>
                    <div>
                    <Link to={`/craftDetails/${_id}`}><button className="font-medium flex justify-end p-2 bg-[#3E54A3] text-white rounded-r-full">View Details</button></Link>
                    </div>
                </a>
            </div>
        </div>
    </section>
    );
};

export default EachCraft;