import React from 'react';
import image1 from '../assets/food-pic-01.png'
import { Fade } from "react-awesome-reveal";

const ExtraSection1 = () => {
    return (
        <div className=''>
            <Fade>
                <div className='w-[85%]  mx-auto my-14 md:my-24'>
                    <div className='flex flex-col md:flex-row gap-5 justify-between border-2 p-6 md:p-10 lg:p-14 rounded-4xl'>
                        <div className='flex flex-col gap-4 justify-center items-center'>
                            <div>
                                <Fade>
                                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                                        Inspiring Everyday Meals <br /> You ll Love to Make
                                    </h1>
                                    <p className='text-gray-500 mt-5'>
                                        Easy Recipes, Big Flavors. Explore authentic flavors from across the globe, right from your kitchen. Our br step-by-step recipes make it fun and easy to bring international dishes to your table.
                                    </p>
                                </Fade>
                            </div>

                        </div>
                        <div className='md:w-1/2 flex flex-row-reverse'>
                            <img src={image1} className='w-full lg:w-[460px] shadow-xs ' alt="" />
                        </div>

                    </div>
                </div>
            </Fade>
        </div>


    );
};

export default ExtraSection1;