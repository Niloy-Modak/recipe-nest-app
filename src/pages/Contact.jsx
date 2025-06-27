import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen bg-base-100 px-4 py-12 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-[#509E2F] mb-6 text-center">Contact Us</h1>

                <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
                    Got a question, suggestion, or just want to say hi? We'd love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
                </p>

                <div className="bg-white shadow-md rounded-2xl p-6 border border-green-200">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-gray-700 font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-gray-700 font-semibold mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div className="col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-[#509E2F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#407d24] transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-12 text-center text-sm text-gray-500">
                    Or email us directly at <a href="mailto:support@foodnest.com" className="text-green-600 underline">support@foodnest.com</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;