import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';

const AllRecipes = () => {
    useEffect(() => {
        document.title = 'All Recipes';
    }, []);

    const loadedRecipes = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        setRecipes(loadedRecipes);
    }, [loadedRecipes]);

    useEffect(() => {
        let sortedRecipes = [...loadedRecipes];

        if (sortOption === 'asc') {
            sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'desc') {
            sortedRecipes.sort((a, b) => b.title.localeCompare(a.title));
        }

        setRecipes(sortedRecipes);
    }, [sortOption, loadedRecipes]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <section className='w-[85%] mx-auto pb-16 pd:mb-20'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl my-4 lg:my-8 font-bold text-[#509E2F] text-center'>All Recipes</h1>

            <div className='flex justify-end mb-6'>
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className='border border-gray-300 p-1 md:px-4 md:py-2 rounded focus:outline-none'
                >
                    <option value="default">Sort by(Default)</option>
                    <option value="asc">Sort by A-Z</option>
                    <option value="desc">Sort by Z-A</option>
                </select>
            </div>

            <div className='grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    recipes.map(recipe => (
                        <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default AllRecipes;
