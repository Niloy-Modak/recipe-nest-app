import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';

const AllRecipes = () => {
    useEffect(()=>{
            document.title= 'All Recipes'
        })

        const recipes = useLoaderData()
    
    return (
        <section className='w-[90%] lg:w-[85%] mx-auto pb-16 pd:mb-20'>
            <h1 className='text-2xl md:text-3xl my-4 font-bold text-[#509E2F] text-center'>All recipes</h1>

            <div className='grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    recipes.map(recipe => 
                    <RecipeCard 
                        key={recipe._id}  
                        recipe={recipe} 
                    ></RecipeCard>)
                }
            </div>
        </section>
    );
};

export default AllRecipes;