import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddCrafts = () => {

    const {user}= useContext(AuthContext);
    
    const handleAddItem=(e)=>{
        e.preventDefault();
        const form = e.target;
        const imageurl= e.target.imageurl.value;
        const itemname= e.target.itemname.value;
        const subcategory= e.target.subcategory.value;
        const description= e.target.description.value;
        const price= e.target.price.value;
        const rating= e.target.rating.value;
        const processingtime= e.target.processingtime.value;
        const stockstatus=e.target.stockstatus.value;
        const name=e.target?.name?.value;
        const email=e.target?.email?.value;
        const customization=e.target.customization.value;


        const newItem={imageurl,itemname,subcategory,description,price,rating,processingtime,stockstatus,name,email,customization}
        console.log(newItem);


        fetch('http://localhost:5000/items',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newItem),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have added an item!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                  })
            }
            form.reset();
        })
    }



    return (
        <div className="bg-[#F4F3F0] p-2 md:p-24">
            <form onSubmit={handleAddItem}>


                {/* form  row  name and quantity*/}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="imageurl" placeholder="Image URL" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="itemname" placeholder="Item Name" className="w-full input input-bordered rounded-l-none" />
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
                            <select name="subcategory" id="lang" className="w-full h-[46px] rounded-r-lg pl-3">
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
                            <input type="text" name="description" placeholder="Description" className="w-full input input-bordered rounded-l-none" />
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
                            <input type="text" name="price" placeholder="Price in dollars" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="w-full input input-bordered rounded-l-none" />
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
                            <input type="text" name="processingtime" placeholder="Processing Time" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockstatus" placeholder="In Stock or Made to Order" className="w-full input input-bordered rounded-l-none" />
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
                            <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName? user.displayName:''} className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Email" defaultValue={user?.email? user.email:'' } className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Customization</span>
                        </label>
                        <label className="input-group">
                            <select name="customization" id="lang" className="w-full h-[46px] rounded-r-lg pl-3 border">
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

export default AddCrafts;