import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const navlink = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addcrafts'>Add Crafts</NavLink>
        <NavLink to='/mycrafts'>My Crafts</NavLink>
    </>

    const { user } = useContext(AuthContext);
    console.log(user)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl pl-0">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div> 
                    :
                        <div><NavLink to='/login'><button>Login</button></NavLink>
                            <NavLink to='/signup'><button>Register</button></NavLink></div>
                }

            </div>
        </div>
    );
};

export default Navbar;