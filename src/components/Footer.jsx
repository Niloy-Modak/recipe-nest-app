import React from 'react';
import footerBg from '../assets/footer.jpg'
import { NavLink } from 'react-router';
import mainLogo from '../assets/logo-a1.png'

const Footer = () => {
    return (
        <>
            <footer className="footer footer-horizontal bg-cover bg-center footer-center text-white rounded p-10"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgb(16,16,16) -19.5%, rgba(16,16,16,0) 100%), url(${footerBg})`
                }}
            >
                <nav className="hidden md:grid grid-flow-col gap-4">
                    <button className="link link-hover">
                        <NavLink to='/' className={({ isActive }) => `${isActive ? "pb-1 border-b-4" : ""}`}>
                            Home
                        </NavLink>
                    </button>
                    <button className="link link-hover">
                        <NavLink to='/all-recipes' className={({ isActive }) => `${isActive ? "pb-1 border-b-4" : ""}`}>
                            All Recipes
                        </NavLink>
                    </button>
                    <button className="link link-hover">
                        <NavLink to='/about-us' className={({ isActive }) => `${isActive ? "pb-1 border-b-4" : ""}`}>
                             About Us
                        </NavLink>
                    </button>
                    <button className="link link-hover">
                        <NavLink to='/support' className={({ isActive }) => `${isActive ? "pb-1 border-b-4" : ""}`}>
                            Support
                        </NavLink>
                    </button>

                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 items-center">
                        <img src={mainLogo} alt="logo" className='w-12 md:w-14'/>
                        <h2 className='text-xl md:text-2xl font-bold'> RecipeNest</h2>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RecipeNest Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;