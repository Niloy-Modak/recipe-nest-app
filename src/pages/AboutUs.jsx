import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <section className="min-h-screen bg-base-100 px-4 py-12 md:px-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-[#509E2F] mb-6 text-center">About Us</h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                    Welcome to <span className="font-semibold text-[#509E2F]">FoodNest</span>, your ultimate destination for discovering, sharing, and celebrating recipes from around the world. Whether you’re a passionate home cook or just starting your kitchen journey, we are here to inspire your next delicious dish.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                        alt="Cooking Together"
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                    />

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
                        <p className="text-gray-700 text-base leading-relaxed">
                            At FoodNest, our mission is to make cooking enjoyable and accessible. We aim to build a community where everyone can contribute, learn, and explore flavors—from traditional family recipes to trendy fusion dishes.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-16 items-center flex-col-reverse md:flex-row">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Easy-to-follow recipes for all levels</li>
                            <li>Upload and share your own creations</li>
                            <li>Save and bookmark your favorites</li>
                            <li>Explore diverse cuisines from real users</li>
                            <li>Simple, fast, and mobile-friendly UI</li>
                        </ul>
                    </div>

                    <img
                        src="https://media.cnn.com/api/v1/images/stellar/prod/220719164934-01-inexpensive-food-healthy-stock.jpg?c=original"
                        alt="Recipe Sharing"
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                    />
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Join the FoodNest Family</h2>
                    <p className="text-gray-700 text-base mb-4">
                        Start your recipe journey today. Discover, cook, and share—because every dish tells a story.
                    </p>
                    <Link
                        to="/all-recipes"
                        className="inline-block mt-2 bg-[#509E2F] text-white px-6 py-3 rounded-full shadow hover:bg-[#407d24] transition duration-300"
                    >
                        Explore Recipes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;