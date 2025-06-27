import React, { useState } from 'react';
import {
  FiMenu, FiX, FiHome, FiList, FiPlusCircle, FiUser
} from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link, NavLink } from 'react-router';


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 2, to: '/dashboard/all-recipes', label: 'All Recipes', icon: <FiList /> },
    { id: 3, to: '/dashboard/add-recipes', label: 'Add Recipe', icon: <FiPlusCircle /> },
    { id: 4, to: '/dashboard/my-recipes', label: 'My Recipes', icon: <FiUser /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 shadow-md z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-700">Recipe Dashboard</h2>
        </div>

        {/* Navigation */}
        <nav className="p-4 text-sm space-y-6">
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-400 mb-2 px-2">My Dashboard</h3>
            <ul className="space-y-1">
              <li>
                <NavLink
                  to="/dashboard/My-Dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive
                      ? 'bg-[#509E2F] text-white'
                      : 'text-gray-700 hover:bg-gray-100'}`
                  }
                >
                  <FiHome className="text-lg" />
                  Dashboard
                </NavLink>

              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold text-gray-400 mb-2 px-2">Recipes</h3>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive
                        ? 'bg-[#509E2F] text-white'
                        : 'text-gray-700 hover:bg-gray-100'}`
                    }
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to='/' className='btn btn-secondary text-white rounded-full'>
           <MdArrowBackIosNew /> <span>Back to Home</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
