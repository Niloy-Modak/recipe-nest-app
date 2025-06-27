import React from 'react';
import BreakFastIcon from '../assets/breakfast-Icon.png'
import lunceIcon from '../assets/lunch-icon.png'
import dinnerIcon from '../assets/dinner-icon.png'
import quickIcon from '../assets/quick-bite-Icon.png'
import dessertIcon from '../assets/dessert-Icon.png'
import { Fade } from "react-awesome-reveal";

const ExtraSection2 = () => {
    return (
        <div className=''>
            <div className='grid md:grid-cols-2 p-10 gap-12 w-[85%]  mx-auto mt-14 bg-blue-200 rounded-2xl shadow-xs '>
                <div className='flex flex-col justify-center gap-4'>
                    <Fade>
                        <h1 className='text-3xl text-base-50 md:text-4xl lg:text-5xl font-bold'>
                            Our diverse Palette
                        </h1>
                    </Fade>

                    <Fade>
                        <p className='text-gray-500 mt-5'>
                            If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
                        </p>
                    </Fade>

                </div>

                <div>

                    <div className='flex justify-between py-4 border-b-1 border-gray-400'>
                        <img src={BreakFastIcon} alt="" />
                        <p className='text-base md:text-lg font-medium'>BREAKFAST</p>
                    </div>

                    <div className='flex justify-between py-4 border-b-1 border-gray-400'>
                        <img src={lunceIcon} alt="" />
                        <p className='text-base md:text-lg font-medium'>lUNCH</p>
                    </div>

                    <div className='flex justify-between py-4 border-b-1 border-gray-400'>
                        <img src={dinnerIcon} alt="" />
                        <p className='text-base md:text-lg font-medium'>DINNER</p>
                    </div>

                    <div className='flex justify-between py-4 border-b-1 border-gray-400'>
                        <img src={dessertIcon} alt="" />
                        <p className='text-base md:text-lg font-medium'>DESSERT</p>
                    </div>

                    <div className='flex justify-between py-4 border-b-1 border-gray-400'>
                        <img src={quickIcon} alt="" />
                        <p className='text-base md:text-lg font-medium'>QUICK BITE!</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;