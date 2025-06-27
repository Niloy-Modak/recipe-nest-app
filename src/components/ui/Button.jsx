import React from 'react';

const Button = ({ label, type, onClick, theClass }) => {
    return (
        <button 
        onClick={onClick}
        type={type}
        className={`cursor-pointer relative inline-flex items-center px-4 py-2 overflow-hidden text-lg font-medium border-2  rounded-full hover:text-white group hover:bg-[#509E2F] ${theClass}`}
      >
        <span className="absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          
        </span>
        <span className="relative ">{label}</span>
    </button>
    );
};

export default Button;
