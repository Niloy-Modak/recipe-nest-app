import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthContext';

const DashNavBar = () => {
    const { user } = use(AuthContext);

    return (
        <nav className="w-full h-[61px] bg-white shadow-md px-4 flex justify-end items-center">
            {user && (
                <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">{user.displayName || user.email}</span>
                    <img
                        src={user.photoURL || 'https://via.placeholder.com/40'}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            )}
        </nav>
    );
};

export default DashNavBar;