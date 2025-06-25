import React, { use } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import Button from './ui/Button';
import Logo from "../assets/logo-a1.png"
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import ThemeSwitcher from './ui/theme';

const NavbarII = () => {
    const { user, logOut } = use(AuthContext)


    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure to Logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#84BD00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        toast.success("Logout complete");
                    })
                    .catch((error) => {
                        toast.error(error.message || "Logout failed");
                    });
            }
        });
    }


    return (
        <div>
            <div className="navbar ">
                <div className='flex w-full justify-between items-center p-3 md:py-4 mx-0 my-2 px-4 bg-base-100 rounded-full border '>
                    <div className="navbar-start">
                        <img src={Logo} className='w-10 h-10 hover:scale-105 transition-all cursor-pointer' alt="" />
                        <a className='cursor-pointer ml-2'>
                            <h1 className='text-xl lg:text-2xl text-[#509E2F] font-bold hover:scale-105 transition-all'>
                                RecipeNest
                            </h1>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium text-base ">
                            <li>
                                <NavLink to='/' 
                                className={({ isActive }) => `${isActive ? "text-[#84BD00] pb-1 rounded-none border-b-4" : ""}`}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/all-recipes' className={({ isActive }) => `${isActive ? "text-[#84BD00] pb-1 rounded-none border-b-4" : ""}`}>
                                    All Recipes
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/add-recipes' className={({ isActive }) => `${isActive ? "text-[#84BD00] pb-1 rounded-none border-b-4" : ""}`}>
                                    Add Recipes
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/my-recipes' className={({ isActive }) => `${isActive ? "text-[#84BD00] pb-1 rounded-none border-b-4" : ""}`}>
                                    MY Recipes
                                </NavLink>
                            </li>


                        </ul>
                    </div>

                    <div className="navbar-end">

                        <ThemeSwitcher/>                   

                        {
                            user ?
                                (
                                    <div className='flex justify-center items-center gap-4'>
                                        <img className='w-12 h-12 rounded-full object-cover hover:scale-105 transition-all cursor-pointer' src={user.photoURL} alt="" />

                                        <button onClick={handleLogout} className='btn bg-[#84BD00] text-white hover:bg-green-500 rounded-full hidden lg:block'>Logout</button>
                                    </div>

                                )
                                :
                                (
                                    <Link to='/auth/sign-up' className='bg-[#509E2F] border-0 text-white hover:bg-green-600 lg:hidden btn-sm py-4 md:py-5.5 text-[14px] md:text-lg rounded-full btn'>
                                        Sign Up
                                    </Link>
                                )
                        }
                        {
                            user ?
                                (
                                    <div className='hidden'>
                                    </div>

                                )
                                :
                                (
                                    <div className='hidden lg:flex items-center gap-3'>
                                        <Link to='/auth/sign-up' >
                                            <Button label='Sign Up' />
                                        </Link>
                                        <Link to='/auth/login' className='bg-[#509E2F] border-0 text-white hover:bg-green-600 py-5.5 text-xl rounded-full btn'>
                                            Login
                                        </Link>
                                    </div>
                                )
                        }



                    </div>



                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost px-2 lg:hidden hover:bg-base-100 hover:border-none hover:shadow-none">
                            <button>
                                <FaBars className='cursor-pointer' size={24} />
                            </button>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu right-1 dropdown-content bg-[#84bd00ea] text-white text-xs rounded-box z-1 mt-3  p-2 shadow w-[280px] md:w-[460px]">



                            <li className=''>
                                <NavLink to='/' className='text-center text-lg p-4 hover:bg-[#509E2F] hover:text-white transition-all rounded-2xl cursor-pointer'>
                                    Home
                                </NavLink>
                            </li>

                            <li className=''>
                                <NavLink to='/all-recipes' className='text-center text-lg p-4 hover:bg-[#509E2F] hover:text-white transition-all rounded-2xl cursor-pointer'>
                                    All Recipes
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/add-recipes' className='text-center text-lg p-4 hover:bg-[#509E2F] hover:text-white transition-all rounded-2xl cursor-pointer'>
                                    Add Recipes
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/my-recipes' className='text-center text-lg p-4 hover:bg-[#509E2F] hover:text-white transition-all rounded-2xl cursor-pointer'>
                                    My Recipes
                                </NavLink>
                            </li>
                            {
                                user ?
                                    (
                                        <li onClick={handleLogout} className='text-center text-lg p-4 hover:bg-[#509E2F] bg-green-600 hover:text-white transition-all rounded-2xl cursor-pointer'>
                                            Logout
                                        </li>

                                    )
                                    :
                                    (
                                        <li className='hidden'></li>
                                    )
                            }




                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavbarII;