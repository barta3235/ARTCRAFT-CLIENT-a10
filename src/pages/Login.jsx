import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {
    const {loginUser,googleSignIn,githubSignIn}=useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email,password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    const handleGoogle=(e)=>{
        e.preventDefault()

        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleGithub=(e)=>{
        e.preventDefault()
        githubSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }




    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                        <button className="btn btn-primary">Log In</button>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[18px]">Login with:</span>
                        </label>
                        <div className="flex gap-5">
                             <div >
                                <button onClick={handleGoogle}>< FaGoogle className="text-3xl"></FaGoogle></button>
                             </div>
                             <div>
                                <button onClick={handleGithub}><FaGithub className="text-3xl" ></FaGithub></button>
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