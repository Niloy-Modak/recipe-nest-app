import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import ExtraSection1 from '../components/ExtraSection1';
import ExtraSection2 from '../components/ExtraSection2';
import TopLikedRecipes from '../components/TopLikedRecipe';
import { useLoaderData } from 'react-router';

const Home = () => {
    useEffect(()=>{
        document.title= 'Home'
    })

    const recipeData = useLoaderData()
    
    return (
        <>
            <section>
                <Banner/>
                
                <TopLikedRecipes recipeData={recipeData} />
                <ExtraSection2/>
                <ExtraSection1/>
            </section>
        </>
    );
};

export default Home;