import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Allcrafts = () => {

    const loadedCrafts = useLoaderData();
    const [crafts, setcrafts] = useState(loadedCrafts);

    return (

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-[20px]">Item Name</th>
                        <th className="text-[20px]">Subcategory</th>
                        <th className="text-[20px]">Rating</th>
                        <th className="text-[20px]">Stock Status</th>
                        <th className="text-[20px]">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        crafts.map((acraft,idx)=><tr key={acraft._id}>
                        <th className="text-[16px]">{idx+1}</th>
                        <td className="text-[16px]">{acraft.itemname}</td>
                        <td className="text-[16px]">{acraft.subcategory}</td>
                        <td className="text-[16px]">{acraft.rating}</td>
                        <td className="text-[16px]">{acraft.stockstatus}</td>
                        <td className="text-[16px]"><Link to={`/craftDetails/${acraft._id}`}><button className="btn hover:bg-blue-950 hover:text-white">View Details</button></Link></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allcrafts;