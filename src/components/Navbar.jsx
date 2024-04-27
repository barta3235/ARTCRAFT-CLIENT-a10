import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext);
    console.log(user?.email)

    const navlink = <>
        <NavLink className={({isActive})=> isActive? 'text-[22px] font-bold mr-[25px] text-[#3E54A3] border-b-4 pb-2 border-[#3E54A3]' : 'text-[22px] font-semibold mr-[25px] pb-2 hover:border-b-4 hover:border-[#3E54A3]'} to='/'>Home</NavLink>
        <NavLink className={({isActive})=> isActive? 'text-[22px] font-bold mr-[25px] text-[#3E54A3] border-b-4 pb-2 border-[#3E54A3]' : 'text-[22px] font-semibold mr-[25px] pb-2 hover:border-b-4 hover:border-[#3E54A3]'} to='/addcrafts'>Add Crafts</NavLink>
        <NavLink className={({isActive})=> isActive? 'text-[22px] font-bold mr-[25px] text-[#3E54A3] border-b-4 pb-2 border-[#3E54A3]' : 'text-[22px] font-semibold mr-[25px] pb-2 hover:border-b-4 hover:border-[#3E54A3]'} to='/allcrafts'>All Crafts</NavLink>
        <NavLink className={({isActive})=> isActive? 'text-[22px] font-bold text-[#3E54A3] border-b-4 pb-2 border-[#3E54A3]' : 'text-[22px] font-semibold pb-2 hover:border-b-4 hover:border-[#3E54A3]'} to={`/mycrafts/${user?.email}`}>My Crafts</NavLink>
    </>

    

    return (
        <div className="navbar  fixed items-center z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
                        <NavLink className='text-2xl mb-3 p-2 border-b font-medium shadow-md border-r rounded-xl border-[#3E54A3]' to='/'>Home</NavLink>
                        <NavLink className='text-2xl mb-3 p-2 border-b font-medium shadow-md border-r rounded-xl border-[#3E54A3]'  to='/addcrafts'>Add Crafts</NavLink>
                        <NavLink className='text-2xl mb-3 p-2 border-b font-medium shadow-md border-r rounded-xl border-[#3E54A3]'  to='/allcrafts'>All Crafts</NavLink>
                        <NavLink className='text-2xl mb-3 p-2 border-b font-medium shadow-md border-r rounded-xl border-[#3E54A3]' to={`/mycrafts/${user?.email}`}>My Crafts</NavLink>
                        <NavLink className='text-2xl mb-3 p-2 border-b font-medium shadow-md border-r rounded-xl border-[#3E54A3]' to='/login'>Login</NavLink>
                        <NavLink className='text-2xl p-2 border-b font-medium shadow-md border-r rounded-xl border-[#3E54A3]' to='/signup'>Sign Up</NavLink>
                    </ul>
                </div>
                <Link href="/" className="text-2xl md:text-3xl pl-0 font-extrabold text-[#3E54A3] hover:text-blue-950">Kraftelle</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="avatar" >  
                            <div className="w-14 rounded-full">
                            
                                <img src={user.photoURL}/>  
                            </div>
                        </div>
                        :
                        <div className="flex"><NavLink className="md:mr-[20px] p-3 text-white bg-[#3E54A3] font-medium rounded-lg" to='/login'><button>Login</button></NavLink>
                            <NavLink className='md:mr-[20px] p-3 text-white bg-[#3E54A3] font-medium rounded-lg hidden md:flex' to='/signup'><button>Register</button></NavLink></div>
                }
            </div>
        </div>
    );
};

export default Navbar;