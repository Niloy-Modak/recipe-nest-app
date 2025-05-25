import React from 'react';
import banner from '../assets/banner.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";


const Banner = () => {
    return (
        <div >
            <div
                className="h-[615px] bg-cover bg-center flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgb(16,16,16) -19.5%, rgba(16,16,16,0) 100%), url(${banner})`
                }}
            >
                <Fade>
                    <h1 className='text-4xl lg:text-6xl text-white font-bold text-center text-shadow-2xs px-4'>
                        Your Daily Dose of Flavor <br /> Starts Here
                    </h1>
                </Fade>

                <p className='text-white text-center mt-4 w-[65%] lg:w-[642px]'>

                    Discover mouthwatering recipes from around the world, crafted for home cooks of all skill levels.
                    From quick weeknight meals to gourmet delights cook, savor, and share your passion for food.
                    <Typewriter
                        words={[' Explore new recipes', ' Learn new recipe easily', ' Nourish Your Body with Every Bite', 'From Cookies to Cakes—Sweeten Your Day']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>


            </div>

        </div >
    );
};

export default Banner;

