import React, { use, useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { AuthContext } from '../provider/AuthContext';

const COLORS = ['#509E2F', '#86BA1B', '#B6D52A', '#D5E88F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
    const recipes = useLoaderData();
    const { user } = use(AuthContext);

    const myRecipes = useMemo(() => {
        return recipes.filter(recipe => recipe.email === user?.email);
    }, [recipes, user]);

    // Count recipes by cuisine
    const cuisineData = useMemo(() => {
        const countMap = {};
        recipes.forEach(recipe => {
            const cuisine = recipe.cuisine || 'Unknown';
            countMap[cuisine] = (countMap[cuisine] || 0) + 1;
        });

        return Object.entries(countMap).map(([name, value]) => ({ name, value }));
    }, [recipes]);

     useEffect(() => {
        document.title = 'My Dashboard';
    }, []);

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#509E2F] mb-6 text-center">Dashboard</h1>

            {/* User Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow-md rounded-2xl border border-green-200 px-6 py-6 mb-6 max-w-2xl mx-auto">
                <img
                    src={user?.photoURL || 'https://i.ibb.co/S32HNjD/default-avatar.png'}
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full border-2 border-green-500 object-cover"
                />
                <div className="text-center sm:text-left">
                    <h2 className="text-lg font-bold text-gray-800">{user?.displayName || 'Anonymous User'}</h2>
                    <p className="text-gray-600">{user?.email || 'No Email Found'}</p>
                </div>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-green-200">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Recipes</h2>
                    <p className="text-3xl font-bold text-[#509E2F]">{recipes.length}</p>
                </div>

                <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-blue-200">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">My Recipes</h2>
                    <p className="text-3xl font-bold text-blue-600">{myRecipes.length}</p>
                </div>
            </div>

            {/* Pie Chart */}
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 text-center">Total Recipes by Cuisine</h2>
            <div className="w-full h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={cuisineData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius="80%"
                            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        >
                            {cuisineData.map((_, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
