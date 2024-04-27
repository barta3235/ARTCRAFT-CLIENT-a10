import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);


    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photourl = e.target.photourl.value
        const password = e.target.password.value
        
        if(password.length<6){
            Swal.fire({
                title: 'Error!',
                text: 'Password should be at least of 6 characters',
                icon: 'error',
                confirmButtonText: 'Continue'
              })
              return
        }
        if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
            Swal.fire({
                title: 'Error!',
                text: 'Password should have at least one Uppercase and one lowercase letter',
                icon: 'error',
                confirmButtonText: 'Continue'
              })
              return
        }
        
        const newUser = { name, email, photourl, password }
        console.log(newUser);


        createUser(email, password)
            .then((result) => {
                if (result.user) {
                    updateUser(name, photourl)
                        .then((result) => {
                            console.log(result.user)
                            Swal.fire({
                                title: 'Success!',
                                text: 'You have successfully registered',
                                icon: 'success',
                                confirmButtonText: 'Continue'
                              })
                        })
                }
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body px-2 md:px-7">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photourl" type="text" placeholder="Photo Url" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="mt-4">
                            <p>Already have an account? <Link to='/login'>Login</Link> </p>
                        </div>

                        <div className="form-control mt-2">
                            <button className="btn btn-primary bg-[#3E54A3] text-white hover:bg-blue-950">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;