import React, { use, useEffect, useState } from 'react';
import banner from '../assets/loginSigninBanner.jpg'
import { FaGoogle } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    useEffect(()=>{
            document.title= 'Login '
        })
    const { logIn, signInWithGoogle, setUser } = use(AuthContext)
    
    const [errorMassage, setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

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

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        logIn(email, password)
            .then(result => {
                const user = result.user

                navigate(`${location.state? location.state : "/"}`)

                toast.success('Register successfully')
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)

                setError(errorCode)
            })
    }

    
    return (
        <div
        className="min-h-[calc(100vh-128px)] bg-cover bg-center flex justify-center items-center "
                        style={{
                            backgroundImage: ` url(${banner})`
                        }}
        >
           <div className="card bg-base-100 rounded-2xl mx-auto mt-10 w-[75%] md:w-[520px] lg:w-[608px] mb-48 p-3 md:p-6 lg:p-12 shrink-0 shadow-2xl">
                <h1 className="text-2xl md:text-3xl font-bold text-[#84BD00] text-center m-2">Login Now!</h1>
                <div className="card-body">

                    <form onSubmit={handleLogin} className="fieldset ">
                        <label className="label text-lg font-medium">Email</label>
                        <input name='email' type="email" className="input focus:outline-0 w-full" placeholder="Email" required/>

                        <label className="label text-lg font-medium mt-2">Password</label>
                        <input
                            name='password'
                            type="current-password"
                            className="input focus:outline-0 w-full "
                            placeholder="Password"
                            minLength="6"
                            required />

                            <div className='mt-2'><NavLink to='/auth/forgot-pass' className="link link-hover text-base font-medium">Forgot password?</NavLink></div>

                        {errorMassage && <p className='text-red-500 font-semibold'>{errorMassage}</p>}

                        <button className="btn bg-[#84BD00] text-white hover:bg-green-500 mt-2 rounded-full">Login</button>
                    </form>
                    <p> New to this site? <Link className='text-[#509E2F] font-semibold' to='/auth/sign-up'>Sign Up</Link></p>

                    {/* Sign in with Google */}
                    <p className='font-medium text-gray-600 text-center text-base mt-4'>- Or -</p>
                    <button onClick={handleGoogleLogin} className='btn text-white flex bg-black items-center justify-between md:text-base md:px-8 rounded-full'>
                        <FaGoogle/> Sign in with Google <span></span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;