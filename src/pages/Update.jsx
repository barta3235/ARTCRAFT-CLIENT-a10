import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const loadedItems = useLoaderData();
    const {_id,imageurl, itemname, subcategory, description, price, rating, processingtime, stockstatus, name, email, customization } = loadedItems;

    const handleUpdateNew = (e) => {
        e.preventDefault();
        const imageurl = e.target.imageurl.value;
        const itemname = e.target.itemname.value;
        const subcategory = e.target.subcategory.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const processingtime = e.target.processingtime.value;
        const stockstatus = e.target.stockstatus.value;
        const name = e.target?.name?.value;
        const email = e.target?.email?.value;
        const customization = e.target.customization.value;


        const updatedItem = { imageurl, itemname, subcategory, description, price, rating, processingtime, stockstatus, name, email, customization };
        console.log(updatedItem);

        fetch(`http://localhost:5000/items/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your art or craft data is updated',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                  })
 
            }
        })
    }




    return (
        <div className="p-2 md:p-24 bg-slate-300">
            <h1 className="text-4xl font-bold mb-[20px] text-blue-950">Update information</h1>
            <form onSubmit={handleUpdateNew}>


                {/* form  row  name and quantity*/}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="imageurl" defaultValue={imageurl} placeholder="Image URL" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="itemname" defaultValue={itemname} placeholder="Item Name" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row supplier and taste */}
                <div className="md:flex mb-2 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <select name="subcategory" defaultValue={subcategory} id="lang" className="w-full h-[46px] rounded-r-lg pl-3">
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" defaultValue={description} className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row category and details */}
                <div className="md:flex mb-2 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price in dollars" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row */}
                <div className="md:flex mb-2 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processingtime" defaultValue={processingtime} placeholder="Processing Time" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockstatus" defaultValue={stockstatus} placeholder="In Stock or Made to Order" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row */}
                <div className="md:flex mb-2 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" defaultValue={name ? name : ''} className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Email" defaultValue={email ? email : ''} className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Customization</span>
                    </label>
                    <label className="input-group">
                        <select name="customization" defaultValue={customization} id="lang" className="w-full h-[46px] rounded-r-lg pl-3 border">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>
                </div>


                <input className="btn btn-block bg-[#3E54A3] text-[20px] font-semibold mt-[20px] text-white hover:bg-blue-950" type="submit" value="Add your craft" />



            </form>
        </div>
    );
};

export default Update;