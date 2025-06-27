import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { Link } from 'react-router';


const DashboardMyRecipes = () => {
    const { user, setLoading } = use(AuthContext);
    const userEmail = user?.email;
    const [myRecipes, setRecipes] = useState([]);

    useEffect(() => {
        document.title = 'My Recipe';
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
        <div className=''>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary text-shadow-2xs font-semibold text-center my-6">My Recipes</h1>
            <div className='lg:w-[70%] mx-auto'>
                {myRecipes.length === 0 ? (
                    <section className='min-h-[calc(100vh-145px)] bg-secondary flex flex-col justify-center items-center gap-12 rounded-2xl'>
                        <p className="text-center text-2xl md:text-3xl px-4 lg:text-5xl text-white mt-10">
                            You haven't created any recipes yet! <br /> Please add your recipe.
                        </p>
                        <Link to='/dashboard/add-recipes' className='btn btn-primary'>
                            Go add your recipe
                        </Link>
                    </section>

                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto border border-gray-300 w-full">
                            <thead>
                                <tr className='border-2 border-gray-400 bg-secondary text-white'>
                                    <th>Recipe</th>
                                    <th className='hidden md:table-cell'>Cuisine Type</th>
                                    <th>People liked</th>
                                    <th>View details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myRecipes.map((recipe) => (
                                    <tr key={recipe._id} className="border bg-white border-gray-400">
                                        <td className="p-4 text-center w-64 border-gray-400">
                                            <div className="flex items-center gap-3 justify-between">
                                                <img
                                                    src={recipe.image}
                                                    alt={recipe.title}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                                <span className="font-medium">{recipe.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center border border-gray-400 hidden md:table-cell">
                                            {recipe.cuisine}
                                        </td>
                                        <td className="p-4 text-center border border-gray-400">
                                            {recipe.likes || 0}
                                        </td>
                                        <td className="p-4 text-center border border-gray-400">
                                            <Link to={`/recipe/${recipe._id}`} className='hover:bg-secondary btn hover:text-white rounded-full py-2 px-4'>
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
