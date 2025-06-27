import React from 'react';

const Support = () => {
    return (
        <section className="min-h-screen bg-base-100 px-4 py-12 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-[#509E2F] mb-6 text-center">
                    Support
                </h1>

                <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
                    Need assistance? We're here to help! Whether you have a question, want to report a problem, or need guidance using FoodNest, please choose one of the options below or contact us directly.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 text-center">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
                        <h2 className="text-xl font-semibold mb-3 text-[#509E2F]">FAQ</h2>
                        <p className="text-gray-600 mb-4">
                            Find answers to the most common questions about FoodNest.
                        </p>
                        <a href="/faq" className="text-green-600 font-semibold underline hover:text-green-800">
                            Visit FAQ
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
                        <h2 className="text-xl font-semibold mb-3 text-[#509E2F]">Contact Support</h2>
                        <p className="text-gray-600 mb-4">
                            Reach out to our support team for personal assistance.
                        </p>
                        <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">
                            Contact Us
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
                        <h2 className="text-xl font-semibold mb-3 text-[#509E2F]">Report a Bug</h2>
                        <p className="text-gray-600 mb-4">
                            Help us improve by reporting bugs or issues you encounter.
                        </p>
                        <a href="mailto:support@foodnest.com?subject=Bug%20Report" className="text-green-600 font-semibold underline hover:text-green-800">
                            Email Support
                        </a>
                    </div>
                </div>

                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                    Still need help? Send us a message anytime through our{' '}
                    <a href="/contact" className="text-green-600 underline font-semibold hover:text-green-800">
                        Contact Page
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};

export default Support;