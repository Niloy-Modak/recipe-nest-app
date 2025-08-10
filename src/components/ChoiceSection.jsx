import React from 'react';
import { FaUtensils, FaShoppingBasket, FaLeaf, FaClock } from 'react-icons/fa';

const ChoiceSection = () => {
    return (
        <section className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800">
                What brings you to Recipe Next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Choice 1 */}
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <FaUtensils className="text-green-600 text-7xl mb-6" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">I'm a Recipe Creator</h3>
                    <p className="text-gray-600 mb-6 px-2">
                        Share your culinary creations and inspire food lovers worldwide.
                    </p>
                    
                </div>

                {/* Choice 2 */}
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <FaShoppingBasket className="text-green-600 text-7xl mb-6" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">I'm here to Cook</h3>
                    <p className="text-gray-600 mb-6 px-2">
                        Discover new recipes and plan your next delicious meal.
                    </p>
                    
                </div>

                {/* Choice 3 */}
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <FaLeaf className="text-green-600 text-7xl mb-6" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">I'm Vegan or Vegetarian</h3>
                    <p className="text-gray-600 mb-6 px-2">
                        Find delicious plant-based recipes tailored to your lifestyle.
                    </p>
                   
                </div>

                {/* Choice 4 */}
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <FaClock className="text-green-600 text-7xl mb-6" />
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">I'm Short on Time</h3>
                    <p className="text-gray-600 mb-6 px-2">
                        Explore quick and easy recipes perfect for busy schedules.
                    </p>
                
                </div>
            </div>
        </section>
    );
};

export default ChoiceSection;
