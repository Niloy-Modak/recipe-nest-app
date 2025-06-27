import React, { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';

const AddRecipe = () => {
    const { user } = use(AuthContext)
    const userEmail = user?.email || '';

    useEffect(() => {
        document.title = 'Add Recipe'
    })

    const [selectedOption, setSelectedOption] = useState("");

    const handleAddRecipe = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newRecipeData = Object.fromEntries(formData.entries())

        newRecipeData.categories = formData.getAll('categories');

        fetch('https://b11-a10-recipenest.vercel.app/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipeData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {

                    Swal.fire({
                        title: "Recipe added!",
                        text: "Your recipe successfully added",
                        icon: "success"
                    });

                    form.reset()
                }
            })
    }


    return (
        <div className='w-full mx-auto'>
            <div className='lg:h-[680px] mb-12'>
                <h1 className='my-8 text-center text-3xl font-bold text-[#509E2F] text-shadow-2xs'>
                    Add Recipes
                </h1>

                <div className='lg:w-[868px] md:w-[668px] w-[328px] mx-auto bg-white p-6 md:p-8 lg:p-12 rounded-2xl  '>
                    <form onSubmit={handleAddRecipe}>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>

                            <fieldset className="fieldset ">
                                <label className="label">Title</label>
                                <input type="text" name='title' className="input focus-visible:outline-none w-full" placeholder="Enter Title" required />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <label className="label">Ingredients</label>
                                <input type="text" name='ingredients' className="input focus-visible:outline-none w-full" placeholder="Enter Ingredients" required />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <label className="label">Instructions</label>
                                <input type="text" name='instructions' className="input focus-visible:outline-none w-full" placeholder="Enter Instructions" required />
                            </fieldset>

                            <fieldset className="fieldset ">
                                <label className="label">Cuisine Type</label>

                                <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} name="cuisine" className='input focus-visible:outline-none w-full text-gray-500 cursor-pointer border-gray-400' required>
                                    <option value='' disabled hidden>Please Chose</option>
                                    <option value='Italian' className='text-gray-800 font-medium'> Italian</option>
                                    <option value='Mexican' className='text-gray-800 font-medium'> Mexican</option>
                                    <option value='Indian' className='text-gray-800 font-medium'>Indian</option>
                                    <option value='Chinese' className='text-gray-800 font-medium'>Chinese</option>
                                    <option value='Others' className='text-gray-800 font-medium'>Others</option>
                                </select>

                            </fieldset>

                            <fieldset className="fieldset ">
                                <label className="label">Preparation Time</label>
                                <input required type="number" name='time' className="input focus-visible:outline-none w-full" placeholder="Preparation Time (in min)" />
                            </fieldset>

                            <fieldset className="fieldset ">
                                <label className="label">Image</label>
                                <input required type="text" name='image' className="input focus-visible:outline-none w-full" placeholder="Image URL" />
                            </fieldset>

                            <input type="number" name="likeCount" defaultValue={0} hidden />
                            <input type="email" name="email" value={userEmail} hidden readOnly />

                        </div>

                        <div>

                            <fieldset className="fieldset">
                                <label className="label">Choose Categories</label>

                                <div className="grid grid-cols-2 lg:flex p-4 lg:p-2 justify-center rounded-lg gap-4 border bg-base-100 border-gray-400">
                                    {[
                                        { label: 'Breakfast', value: 'breakfast' },
                                        { label: 'Lunch', value: 'lunch' },
                                        { label: 'Dinner', value: 'dinner' },
                                        { label: 'Dessert', value: 'dessert' },
                                        { label: 'Vegan', value: 'vegan' },
                                    ].map((item) => (
                                        <div key={item.value} className="flex items-center text-lg gap-2">
                                            <input
                                                type="checkbox"
                                                name="categories"
                                                className="cursor-pointer"
                                                value={item.value}
                                            />
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            </fieldset>

                            <input type="submit" className='btn mt-6 bg-[#84BD00] text-white rounded-full hover:bg-[#509E2F]' value="Add Recipe" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};



export default AddRecipe;