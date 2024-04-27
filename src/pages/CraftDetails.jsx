import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { MdOutlineMoreTime } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const CraftDetails = () => {

    const loadedItem = useLoaderData();
    const [item, setItem] = useState(loadedItem);

    const { imageurl, itemname, subcategory, description, price, rating, processingtime, stockstatus, name, email, customization } = item;


    return (
        <section>
            <div className="dark:bg-violet-600">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50 bg-slate-200">
                    <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{itemname}</h1>
                    <h1 className="text-2xl md:text-3xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 mt-[30px]">{subcategory}</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 text-justify">{description}</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-[30px] font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Price: ${price}</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50 flex items-center gap-2 border-[#3E54A3]">Ratings: {rating} <FaStar className="text-yellow-500 text-[20px]"></FaStar></button>
                    </div>


                    <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
                        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                            <h2 className="text-5xl font-bold text-blue-950">We make your home colorful</h2>
                        </div>
                        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center p-4">
                                <MdOutlineMoreTime className="text-6xl"></MdOutlineMoreTime>
                                <h3 className="my-3 text-2xl font-semibold">Stock Status</h3>
                                <div className="space-y-1 leading-tight">
                                    <p className="text-3xl">{stockstatus}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <AiOutlineStock className="text-6xl"></AiOutlineStock>
                                <h3 className="my-3 text-2xl font-semibold">Processing Time</h3>
                                <div className="space-y-1 leading-tight">
                                    <p className="text-3xl">{processingtime}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <MdOutlineDashboardCustomize className="text-6xl"></MdOutlineDashboardCustomize>
                                <h3 className="my-3 text-3xl font-semibold">Customization</h3>
                                <div className="space-y-1 leading-tight">
                                    <p className="text-3xl">{customization}</p>
                                </div>
                            </div>


                        </div>
                    </section>


                    <h1 className="font-medium text-4xl text-center mb-[30px]">Owner Data</h1>
                    <div className="flex w-full flex-col md:flex-row gap-5">
                        <div className="grid h-20 flex-grow card border border-blue-950 rounded-box place-items-center font-medium text-[20px] p-1">{name}</div>
                        <div className="grid h-20 flex-grow card border border-blue-950 rounded-box place-items-center font-medium text-[20px] p-1">{email}</div>
                    </div>


                </div>
            </div>
            <img src={imageurl} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
        </section>
    );
};

export default CraftDetails;