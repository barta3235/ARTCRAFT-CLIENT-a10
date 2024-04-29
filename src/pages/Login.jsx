import { Link, useLocation, useNavigate, } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import AOS from 'aos'
import 'aos/dist/aos.css'



const Login = () => {
    const {loginUser,googleSignIn,githubSignIn}=useContext(AuthContext);
    const location=useLocation();
    const navigation=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email,password)
        .then((result)=>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'You have logged in',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
            navigation(location.state? location.state : '/');
            
        })
        .catch(error=>{
            console.log(error.message)
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })

    }

    const handleGoogle=(e)=>{
        e.preventDefault()

        googleSignIn()
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'You have logged in',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
              navigation(location.state? location.state : '/');
        })
        .catch(error=>{
            console.log(error.message)
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    const handleGithub=(e)=>{
        e.preventDefault()
        githubSignIn()
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'You have logged in',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
              navigation(location.state? location.state : '/');
        })
        .catch(error=>{
            console.log(error.message)
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })

    }

    useEffect(()=>{
        AOS.init({duration:1000})
    },[])




    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-up">
                <form onSubmit={handleLogin} className="card-body px-2 md:px-7">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="mt-4">
                        <p>New to the our page? <Link to='/signup'>Sign Up</Link> </p>
                    </div>

                    <div className="form-control mt-2">
                        <button className="btn btn-primary bg-[#3E54A3] text-white hover:bg-blue-950">Log In</button>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[18px] mb-2">Login with:</span>
                        </label>
                        <div className="flex gap-6">
                             <div>
                                <button className="border p-2 border-black rounded-full" onClick={handleGoogle}>< FaGoogle className="text-3xl hover:text-red-700"></FaGoogle></button>
                             </div>
                             <div>
                                <button className="border p-2 border-black rounded-full" onClick={handleGithub}><FaGithub className="text-3xl  hover:text-blue-700" ></FaGithub></button>
                             </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;