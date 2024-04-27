import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";

const MyArtDetails = ({ art, setArt,myArt }) => {
    const { _id,imageurl, itemname, price, rating, stockstatus, customization } = art;
    

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">

                <div className="">
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={imageurl} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{itemname}</h3>
                            <h1 className="text-[20px] font-medium flex items-center gap-1"><IoPricetags></IoPricetags> Price: ${price}</h1>
                            <h1 className="text-[20px] font-medium flex items-center gap-1">Ratings: {rating}<FaStar className="text-yellow-500"></FaStar></h1>
                            <h1 className="text-[20px] font-medium flex items-center gap-1"><AiOutlineStock></AiOutlineStock> Stock: {stockstatus}</h1>
                            <h1 className="text-[20px] font-medium flex items-center gap-1"><MdDashboardCustomize></MdDashboardCustomize>Customization: {customization}</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <button className="font-medium flex justify-end p-2 bg-red-800 text-white rounded-xl">Delete</button>
                            <Link><button className="font-medium flex justify-end p-2 bg-yellow-300 text-white rounded-xl">Update</button></Link>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MyArtDetails;