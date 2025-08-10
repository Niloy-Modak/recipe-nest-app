import React from 'react';

const TrustedStatsSection = () => {
    return (
        <section className=" py-16 flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="People cooking together"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Content */}
            <div className="flex-1">
                <div>
                    <p className="text-sm text-green-600 uppercase mb-2 font-semibold">Our track record</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Trusted by thousands of food lovers worldwide
                    </h2>
                    <p className="text-gray-700 mb-10 max-w-lg">
                        Recipe Next connects passionate creators and home cooks with the best recipes, tips,
                        and food inspiration. Join a growing community that's sharing and discovering every day.
                    </p>

                    <div className="grid grid-cols-2 gap-8 max-w-md">
                        <div>
                            <p className="text-2xl font-bold text-gray-900">15,000+</p>
                            <p className="text-gray-600">Active users monthly</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                            <p className="text-gray-600">Average recipe rating</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">99.8%</p>
                            <p className="text-gray-600">Uptime guarantee</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">$500K</p>
                            <p className="text-gray-600">Community rewards paid</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustedStatsSection;
