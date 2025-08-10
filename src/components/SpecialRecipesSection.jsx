import React from 'react';

const SpecialRecipesSection = () => {
    const specialRecipes = [
        {
            title: "Spicy Chicken Curry",
            description: "Aromatic and flavorful Indian-style curry.",
            image:
                "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        },
        {
            title: "Italian Pasta Delight",
            description: "Creamy Alfredo pasta with fresh herbs.",
            image:
                "https://i.ibb.co.com/G4gTBgHm/food-image-1.jpg",
        },
        {
            title: "Healthy Avocado Salad",
            description: "Fresh and nutritious salad for a healthy lifestyle.",
            image:
                "https://www.allrecipes.com/thmb/OrtJTuzMCKTXe2wiZKFcR4wWDuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19960-avocado-salad-VAT-001-4x3-64241afdc3b04d00a9372e1573eac6f7.jpg",
        },
        {
            title: "Chocolate Lava Cake",
            description: "Rich, gooey, and decadent dessert treat.",
            image:
                "https://img.taste.com.au/UPH-L9yK/w506-h253-cfill/taste/2016/11/chocolate-lava-cakes-79308-1.jpeg",
        },
    ];
    return (
        <section className="py-10">
            <div className=" mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    SPECIAL RECIPES
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {specialRecipes.map((recipe, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                                <h3 className="text-white text-lg font-bold">
                                    {recipe.title}
                                </h3>
                                <p className="text-white text-sm">{recipe.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialRecipesSection;