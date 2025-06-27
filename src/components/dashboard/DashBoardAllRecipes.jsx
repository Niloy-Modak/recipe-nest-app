import React from 'react';
import { Link, useLoaderData } from 'react-router';

const DashBoardAllRecipes = () => {
    const recipes = useLoaderData()

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-4 mb-8'>All Recipes</h1>
            <div className=' lg:w-[70%] mx-auto'>
                <div className="overflow-x-auto ">
                    <table className="table-auto border border-gray-300 w-full">
                        <thead>
                            <tr className='border-2 border-gray-400 bg-secondary text-white'>
                                <th>Recipe </th>
                                <th className='hidden md:table-cell'>Cuisine Type</th>
                                <th>People liked</th>
                                <th>View details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) => (
                                <tr key={recipe._id} className="border bg-white border-gray-400">
                                    <td className="p-4 text-center w-64 border-gray-400">
                                        <div className="flex items-center gap-3 justify-between">
                                            <img
                                                src={recipe.image }
                                                alt={recipe.title}
                                                className=" flex-1 w-16 h-16 object-cover rounded"
                                            />
                                            <span className="font-medium flex-1/2 ">{recipe.title}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 w-22 text-center border border-gray-400 hidden md:table-cell">
                                        {recipe.cuisine}
                                    </td>
                                    <td className="p-4 w-22 text-center border border-gray-400">
                                        {recipe.likes || 0}
                                    </td>
                                    <td className="p-4 w-22 text-center border border-gray-400">
                                        <Link to={`/recipe/${recipe._id}`} className='hover:bg-secondary hover:text-white rounded-full py-2 px-4'>
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default DashBoardAllRecipes;