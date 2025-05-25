import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavbarII from '../components/NavbarII';


const MainLayout = () => {
    return (
        <>
        <header>
            <NavbarII/>
        </header>
        <main className="min-h-[calc(100vh-322px)]">
            <Outlet/>
        </main>
        <Footer/>

        </>
    );
};

export default MainLayout;