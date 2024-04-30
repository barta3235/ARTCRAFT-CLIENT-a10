import { useContext, useEffect, useState } from "react";
import MyArtDetails from "./MyArtDetails";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const MyCrafts = () => {

    const {user}=useContext(AuthContext);
    const [myArt, setMyArt] = useState([]);
    const [sortMyArt,setSortMyArt]=useState([]);

    // const loadedItems = useLoaderData();
    useEffect(()=>{
        fetch(`http://localhost:5000/itemsbyemail/${user.email}`)
        .then(res=>res.json())
        .then(data=> {
            console.log('In fetch',data);
            setMyArt(data);
            setSortMyArt(data);
        })
    },[])
    


    const handleSort=(value)=>{
        if(value==='Yes'){
            const temp= myArt.filter((aArt)=> aArt.customization==="Yes");
            setSortMyArt(temp);
        }else if(value=== "No"){
            const temp2= myArt.filter((aArt)=> aArt.customization==="No");
            setSortMyArt(temp2);
        }else{
            setSortMyArt(myArt);
        }
    }


    return (
        <div className="text-end">
             <Helmet>
                 <title>Kraftelle | My Arts</title>
            </Helmet>
            <div className="dropdown dropdown-end mt-[30px] mr-[30px] md:mr-[50px]">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#3E54A3] text-white hover:bg-blue-950">Customization</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={()=> handleSort('Yes')}>Yes</button></li>
                    <li><button onClick={()=> handleSort('No')}>No</button></li>
                    <li><button onClick={()=> handleSort('All')}>Show All</button></li>
                </ul>
            </div>
            <div className="grid justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 md:mx-[30px] mx-[7px] mt-[30px]">
                {
                    sortMyArt.map((art) => <MyArtDetails key={art._id} art={art} myArt={myArt} setArt={setSortMyArt}></MyArtDetails>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;