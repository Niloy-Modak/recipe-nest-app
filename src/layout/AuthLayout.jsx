import React from 'react';
import { Link, Outlet } from 'react-router';
import Logo from '../assets/logo-a1.png'

const AuthLayout = () => {
    return (
        <header>
            <nav className='md:grid flex md:grid-cols-3 justify-between items-center p-4 md:px-10 lg:px-16 lg:py-6 gap-3'>
                <div className='hidden md:block'>

                </div>

                <div className='flex justify-center items-center gap-3'>
                    <Link to='/'>
                    <img src={Logo} className='lg:w-20 w-12 hover:scale-105 transition-all hover:' title="This is a hover message" alt="" />
                </Link>
                <Link to='/'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl text-[#509E2F] font-bold hover:scale-105 transition-all'>
                        RecipeNest
                    </h1>
                </Link>
                </div>

                <div className='text-right'>
                    <Link to='/' className='btn bg-[#84BD00] text-white hover:bg-green-500 btn-sm md:btn-md lg:btn-lg'>
                        back to home
                    </Link>
                </div>
                
            </nav>
            <main >
                <Outlet />
            </main>
        </header>
    );
};

export default AuthLayout;