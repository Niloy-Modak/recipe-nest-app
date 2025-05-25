import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import MyRecipeCard from '../components/MyRecipeCard';

const MyRecipe = () => {
    const { user, setLoading } = use(AuthContext)
    const userEmail = user.email
    const [myRecipes, setRecipes] = useState([]);

    useEffect(() => {
        document.title = 'My Recipe'
    })

    useEffect(() => {

        if (userEmail) {
            const url = `https://b11-a10-recipenest.vercel.app/my-recipes?email=${userEmail}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setRecipes(data);
                    setLoading(false);
                })
        }
    });



    return (
        <section className='w-[90%] lg:w-[85%] mx-auto pb-16 md:pb-20 '>
            <h1 className='text-2xl md:text-3xl my-4 font-bold text-[#509E2F] text-center'>My recipes</h1>

            {
                myRecipes.length === 0 ? (
                    <div className='bg-[#dfebc4] min-h-[calc(100vh-322px)] rounded-2xl shadow-2xs flex justify-center items-center'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#509E2F]'>
                            You haven't created any recipes yet
                        </h1>
                    </div>
                )
                    :
                    (
                        <div className='grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                myRecipes.map(myRecipe => <MyRecipeCard key={myRecipe._id} myRecipe={myRecipe} />)
                            }
                        </div>
                    )
            }



        </section>
    );
};

export default MyRecipe;