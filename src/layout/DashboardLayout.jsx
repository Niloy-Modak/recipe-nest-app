import React from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    
    return (
        <div className="flex min-h-screen">
            {/* Sidebar - fixed position */}
            <div className="md:fixed h-full md:w-64">
                <SideBar />
            </div>

            {/* Main content - offset by sidebar width */}
            <main className="flex-1 md:ml-64 p-4 ">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;