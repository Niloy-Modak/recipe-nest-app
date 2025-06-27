import { useState, useEffect, useRef, use } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from "../assets/logo-a1.png";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const { user, logOut } = use(AuthContext);

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
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { id: "n0", page: "Home", link: "/" },
        { id: "n1", page: "All Items", link: "/all-recipes" },
        { id: "n2", page: "Dashboard", link: "/dashboard/My-Dashboard" },
        { id: "n3", page: "About Us", link: "/about-us" },
        { id: "n4", page: "Contact", link: "/contact" },
        { id: "n5", page: "Support", link: "/support" },
    ];

    // Filter navLinks to exclude Dashboard if user is not logged in
    const filteredNavLinks = navLinks.filter(link => {
        if (link.page === "Dashboard" && !user) return false;
        return true;
    });

    return (
        <>
            <nav className="bg-base-100 py-4 w-full fixed top-0 z-50">
                <div>
                    <div className="w-[90%] md:max-w-[85%] mx-auto px-4 sm:px-4 lg:px-8 bg-base-100 rounded-full border">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="flex justify-around items-center">
                                <img src={Logo} className='w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-all cursor-pointer' alt="Logo" />
                                <a className='cursor-pointer ml-2'>
                                    <h1 className='text-xl lg:text-2xl text-[#509E2F] font-bold hover:scale-105 transition-all'>
                                        RecipeNest
                                    </h1>
                                </a>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex md:items-center md:justify-center md:flex-1">
                                <ul className="flex space-x-8">
                                    {filteredNavLinks.map(({ id, page, link }) => (
                                        <li key={id}>
                                            <NavLink
                                                to={link}
                                                className={({ isActive }) =>
                                                    `${isActive ? "text-[#84BD00] pb-1 rounded-none border-b-4" : ""}`
                                                }
                                            >
                                                {page}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Login Button - Desktop */}
                            <div className="hidden md:block">
                                {user ? (
                                    <div className='lg:flex hidden justify-center items-center gap-4'>
                                        <img
                                            className='w-12 h-12 rounded-full object-cover hover:scale-105 transition-all cursor-pointer'
                                            src={user.photoURL}
                                            alt="User"
                                        />

                                        <button
                                            onClick={handleLogout}
                                            className='btn bg-primary text-white hover:bg-green-500 rounded-full hidden lg:block'
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className='hidden lg:flex items-center gap-3'>
                                        <Link
                                            to='/auth/login'
                                            className='bg-[#509E2F] border-0 text-white hover:bg-green-600 py-5.5 text-xl rounded-full btn'
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Toggle Button */}
                            <div className="lg:hidden flex gap-2 items-center">
                                {user ? (
                                    <div className='flex lg:hidden justify-center items-center gap-4'>
                                        <img
                                            className='w-10 h-10 rounded-full object-cover hover:scale-105 transition-all cursor-pointer'
                                            src={user.photoURL}
                                            alt="User"
                                        />
                                    </div>
                                ) : (
                                    <div className='hidden lg:flex items-center gap-3'>
                                        <Link
                                            to='/auth/login'
                                            className='bg-[#509E2F] border-0 text-white hover:bg-green-600 py-5.5 text-xl rounded-full btn'
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-800 cursor-pointer focus:outline-none"
                                    aria-label="Toggle menu"
                                    aria-expanded={isOpen}
                                    aria-controls="mobile-menu"
                                >
                                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Menu - Right Side */}
                    <div
                        ref={menuRef}
                        id="mobile-menu"
                        className={`lg:hidden bg-base-100 shadow-lg fixed top-22 right-0 w-64 md:w-80 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out transform ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        } z-50 overflow-y-auto`}
                    >
                        <div className="p-4 space-y-2 flex flex-col items-end text-right">
                            {filteredNavLinks.map(({ id, page, link }) => (
                                <NavLink
                                    key={id}
                                    to={link}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-right text-gray-800 ${
                                            isActive
                                                ? "text-green-700 font-semibold bg-[#f0e5d0] hover:bg-[#f7e7c6]"
                                                : "hover:bg-[#f7e7c6] hover:text-[#509E2F]"
                                        }`
                                    }
                                >
                                    {page}
                                </NavLink>
                            ))}
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className='bg-[#509E2F] w-full md:w-[80%] mx-auto border-0 text-white hover:bg-green-600 py-5.5 text-lg rounded-full btn'
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    onClick={closeMenu}
                                    to='/auth/login'
                                    className='bg-[#509E2F] w-full md:w-[80%] mx-auto border-0 text-white hover:bg-green-600 py-5.5 text-xl rounded-full btn'
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
