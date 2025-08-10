import React from 'react';
import { Link, useLoaderData } from 'react-router';

const DashBoardAllRecipes = () => {
    const recipes = useLoaderData()

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-4 mb-8'>All Recipes</h1>
            <div className="lg:w-[90%] mx-auto">
                <div className="overflow-x-auto rounded-lg shadow-md">
                    <table className="min-w-full border border-gray-200 bg-white">
                        <thead className="bg-green-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Recipe</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold hidden md:table-cell">
                                    Cuisine Type
                                </th>
                                <th className="px-6 py-3 text-center text-sm font-semibold hidden md:table-cell">Preparation Time</th>
                                <th className="px-6 py-3 text-center text-sm font-semibold hidden md:table-cell">People Liked</th>
                                <th className="px-6 py-3 text-center text-sm font-semibold">View Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recipes.map((recipe) => (
                                <tr
                                    key={recipe._id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    {/* Recipe + Image */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={recipe.image}
                                                alt={recipe.title}
                                                className="w-16 h-16 object-cover rounded-md shadow-sm"
                                            />
                                            <span className="font-medium text-gray-800 line-clamp-2">
                                                {recipe.title}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Cuisine Type */}
                                    <td className="px-6 py-4 hidden md:table-cell text-gray-600">
                                        {recipe.cuisine}
                                    </td>

                                    {/* Likes */}
                                    <td className="px-6 py-4 text-center hidden md:table-cell font-semibold text-gray-700">
                                        {recipe.time || 0} min
                                    </td>
                                    <td className="px-6 py-4 text-center font-semibold text-gray-700 hidden md:table-cell">
                                        {recipe.likes || 0}
                                    </td>

                                    {/* View Button */}
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            to={`/recipe/${recipe._id}`}
                                            className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
                                        >
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