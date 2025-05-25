import React from 'react';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa6";
import { Fade } from 'react-awesome-reveal';

const TopLikedRecipeCard = ({topRecipe}) => {

    const { _id, title, image, categories, likeCount } = topRecipe

    return (
        <>
            <Fade>
            <div className="card bg-base-100 shadow-sm">
                <figure className=" px-4 pt-4 lg:px-8 lg:pt-8">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl object-cover h-[240px] lg:w-[426px] lg:h-[280px]" />
                </figure>
                <div className="card-body items-center space-y-1 text-center">
                    <h2 className="card-title text-2xl">
                        {title}
                    </h2>

                    <div className='flex gap-3 font-medium text-base'>
                        <p className='text-[#509E2F] text-shadow-2xs'>Category :</p>
                        {
                            categories.map(category =>
                                <p key={category} >{category} ,</p>)
                        }
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <FaHeart size={20}/>
                        <p className='text-xl'>{likeCount}</p>
                        <p>people interested in this recipe</p>
                    </div>

                    <div className="card-actions">
                        <Link to={`/recipe/${_id}`} className="btn bg-[#509E2F] border-0 text-white hover:bg-green-600 rounded-full">
                            View details
                        </Link>
                    </div>
                </div>
            </div>
            </Fade>
        </>
    );
};

export default TopLikedRecipeCard;