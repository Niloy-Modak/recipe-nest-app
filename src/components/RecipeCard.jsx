import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router';


const RecipeCard = ({ recipe }) => {
    const { _id, title, image, categories, likeCount } = recipe

    return (
        <div>
            <Fade>
                <div className="card bg-[#dfebc4] shadow-sm lg:h-[520px]">
                    <figure className=" px-4 pt-4 lg:px-8 lg:pt-8">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl object-cover w-full h-[240px] lg:h-[280px]" />
                    </figure>
                    <div className="card-body justify-between items-center space-y-1 text-center ">
                        <h2 className="card-title text-2xl">
                            {title}
                        </h2>

                        <div className='flex justify-center items-center gap-3 font-medium text-base'>
                            <p className='text-[#509E2F] text-shadow-2xs'>Category :</p>
                            {
                                categories.map(category =>
                                    <p key={category} >{category} ,</p>)
                            }
                        </div>

                        <div className='flex items-center justify-center gap-3'>
                            <FaHeart size={20} />
                            <p className='text-xl'>{likeCount}</p>
                            <p>people interested in this recipe</p>
                        </div>
                        <div className="card-actions flex justify-between items-center">
                        <Link to={`/recipe/${_id}`} className="btn bg-[#509E2F] border-0 text-white hover:bg-green-600 rounded-full">
                            View details
                        </Link>
                    </div>
                    </div>
                    
                </div>
            </Fade>
        </div>
    );
};

export default RecipeCard;