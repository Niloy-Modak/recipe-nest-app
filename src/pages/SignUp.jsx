import React, { use, useEffect } from 'react';
import banner from '../assets/loginSigninBanner.jpg'
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';

const SignUp = () => {
    useEffect(() => {
        document.title = 'Sign up'
    })

    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                navigate(`${location.state? location.state : "/"}`)
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    };



    const handleSignUp = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;



        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }) //---
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo }) //-----user
                        navigate(`${location.state? location.state : "/"}`)
                        toast.success('Register successfully')
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    })

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }


    return (

        <div
            className="min-h-[calc(100vh-128px)] bg-cover bg-center flex justify-center items-center "
            style={{
                backgroundImage: ` url(${banner})`
            }}
        >
            <div className="card bg-base-100 rounded-2xl mx-auto mt-10 w-[75%] md:w-[520px] lg:w-[608px] mb-24 p-3 md:p-6 lg:p-12 shrink-0 shadow-2xl">
                <h1 className="text-2xl md:text-3xl font-bold text-[#84BD00]  text-center m-2">Sign Up Now!</h1>
                <div className="card-body">

                    <form onSubmit={handleSignUp} className="fieldset ">
                        <label className="label text-lg font-medium">Name</label>
                        <input type="text" name='name' className="input focus:outline-0 w-full" placeholder="Name" required />

                        <label className="label text-lg font-medium">Image</label>
                        <input type="text" name='photo' className="input focus:outline-0 w-full" placeholder="Photo URL" required />

                        <label className="label text-lg font-medium">Email</label>
                        <input name='email' type="email" className="input focus:outline-0 w-full" placeholder="Email" required />

                        <label className="label text-lg font-medium mt-2">Password</label>
                        <input
                            name='password'
                            type="current-password"
                            className="input focus:outline-0 w-full "
                            placeholder="Password"
                            minLength="6"
                            required />

                        <div className='mt-2'><NavLink to='/auth/forgot-pass' className="link link-hover text-base font-medium">Forgot password?</NavLink></div>

                        <button className="btn bg-[#84BD00] text-white hover:bg-green-500 rounded-full mt-2">Login</button>
                    </form>
                    <p> New to this site? <Link className='text-[#509E2F] font-semibold' to='/auth/login'>Login</Link></p>

                    {/* Sign in with Google */}
                    <p className='font-medium text-gray-600 text-center text-base mt-4'>- Or -</p>
                    <button onClick={handleGoogleLogin} className='btn text-white bg-black flex items-center justify-between md:text-base md:px-8 rounded-full'>
                        <FaGoogle /> Sign in with Google <span></span>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default SignUp;