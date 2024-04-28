import { AiOutlineStock } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";

const EachSubItemCard = ({ item }) => {

    const { _id, imageurl, itemname, subcategory, description, price, rating, processingtime } = item
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">

                <div className="">
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={imageurl} />
                        <div className="mt-[10px] space-y-2">
                            <div className="border rounded-lg p-2 bg-slate-200">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{itemname}</h3>
                                <h1 className="text-[20px] mt-[5px] font-medium flex items-center gap-1"><IoPricetags></IoPricetags> Price: ${price}</h1>
                                <h1 className="text-[20px] mt-[5px] font-medium flex items-center gap-1">Ratings: {rating}<FaStar className="text-yellow-500"></FaStar></h1>
                                <h1 className="text-[20px] mt-[5px] font-medium flex items-center gap-1"><AiOutlineStock></AiOutlineStock>{subcategory}</h1>
                            </div>
                            <h1 className="text-[17px] text-justify font-normal bg-slate-600 text-white border p-2 rounded-lg flex items-center gap-1"><AiOutlineStock></AiOutlineStock>{description}</h1>
                            <h1 className="text-[20px] font-medium flex items-center gap-1"><MdDashboardCustomize></MdDashboardCustomize>Processing Time: <span className="bg-red-700 text-white p-1 rounded-lg text-[17px]">{processingtime}</span></h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Link to={`/craftDetails/${_id}`}><button className="font-medium flex mt-[20px] justify-end p-2 bg-[#3E54A3] text-white rounded-r-full">View Details</button></Link>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EachSubItemCard;