import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavbarII from '../components/NavbarII';
import NavBar from '../components/NavBar';


const MainLayout = () => {
    return (
        <>
        <header className='mb-[98px]'>
            
            <NavbarII/>
            <NavBar/>
            <NavbarII/>
        </header>
        <main className="min-h-[calc(100vh-322px)] ">
            <Outlet/>
        </main>
        <Footer/>

        </>
    );
};

export default MainLayout;