import React from 'react';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa6";
import { Fade } from 'react-awesome-reveal';

const TopLikedRecipeCard = ({ topRecipe }) => {

    const { _id, title, image, categories, likeCount } = topRecipe

    return (
        <>
            <Fade>
                <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden flex flex-col ">

                    {/* Image */}
                    <div className="h-[240px] w-full">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between p-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold line-clamp-2">
                                {title}
                            </h2>

                            <div className="flex flex-wrap justify-center gap-1 text-base font-medium">
                                <span className="text-[#509E2F]">Category:</span>
                                {categories.map(category => (
                                    <span key={category}>{category},</span>
                                ))}
                            </div>

                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <FaHeart size={20} className="text-red-500" />
                                <span className="text-xl font-semibold">{likeCount}</span>
                                <span>people interested</span>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-4">
                            <Link
                                to={`/recipe/${_id}`}
                                className="block w-full bg-[#509E2F] text-white py-2 rounded-full text-center font-medium hover:bg-green-600 transition-colors"
                            >
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