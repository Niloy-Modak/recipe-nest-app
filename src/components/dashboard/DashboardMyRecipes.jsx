import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { Link } from 'react-router';
import { FaClipboardList } from 'react-icons/fa6';

const DashboardMyRecipes = () => {
    const { user, setLoading } = use(AuthContext);
    const userEmail = user?.email;
    const [myRecipes, setRecipes] = useState([]);

    useEffect(() => {
        document.title = 'My Recipes';
    }, []);

    useEffect(() => {
        if (userEmail) {
            const url = `https://b11-a10-recipenest.vercel.app/my-recipes?email=${userEmail}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setRecipes(data);
                    setLoading(false);
                });
        }
    }, [userEmail, setLoading]);

    return (
        <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold text-center my-6">
                My Recipes
            </h1>

            <div className="lg:w-[90%] mx-auto">
                {myRecipes.length === 0 ? (
                    <section className="min-h-[calc(100vh-145px)] bg-green-700 flex flex-col justify-center items-center gap-8 rounded-2xl p-8 text-center shadow-lg ">
                        <FaClipboardList className="text-white w-20 h-20 md:w-24 md:h-24" />
                        <p className="text-white text-xl md:text-3xl font-semibold leading-relaxed">
                            You haven't created any recipes yet! <br />
                            Start adding your delicious recipes now.
                        </p>
                        <Link
                            to="/dashboard/add-recipes"
                            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-100 transition"
                        >
                            Add Your First Recipe
                        </Link>
                    </section>
                ) : (
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
                                {myRecipes.map((recipe) => (
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
                )}
            </div>
        </div>
    );
};

export default DashboardMyRecipes;
