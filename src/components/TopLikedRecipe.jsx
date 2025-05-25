import React from "react";
import TopLikedRecipeCard from "./TopLikedRecipeCard";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";

const TopLikedRecipes = ({ recipeData }) => {

  const topRecipes = [...recipeData]
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 6);

  return (
    <section className="p-6 md:px-10 lg:px-16 w-[90%] md:w-[85%] lg:max-w-[1348px] mx-auto bg-blue-200 rounded-2xl shadow-xs mt-18">

      <Fade>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 mt-6 lg:mb-12 text-center">Top Liked Recipes</h2>
      </Fade>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {topRecipes.map((topRecipe) => (<TopLikedRecipeCard key={topRecipe._id} topRecipe={topRecipe} />))}
        </div>
     
      <div className="flex justify-center items-center mt-8">
        <Link to='/all-recipes' className="btn btn-[#509E2F] rounded-full">
          View All Recipes
        </Link>
      </div>


    </section>
  );
};

export default TopLikedRecipes;