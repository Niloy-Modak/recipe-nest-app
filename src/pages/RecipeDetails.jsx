import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';


const RecipeDetails = () => {
    const allRecipes = useLoaderData()
    const navigate = useNavigate()

    const { user } = use(AuthContext)
    const userEmail = user?.email || '';
    const [selectedOption, setSelectedOption] = useState("");



    const { _id, title, image, ingredients, instructions, categories, cuisine, time, likeCount, email } = allRecipes

    const [newLikeCount, setLikeCount] = useState(Number(likeCount || 0))

    useEffect(() => {
        document.title = `Recipe ${title}`;
    }, [title]);


    const handleLike = () => {
        const newCount = newLikeCount + 1;
        setLikeCount(newCount);

        // Send update to server
        fetch(`https://b11-a10-recipenest.vercel.app/recipes/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likeCount: newCount })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to update likes');
                }
                return res.json();
            })
            .catch(error => {
                console.error('Error updating like:', error);
                setLikeCount(newLikeCount - 1);
            });
    }

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b11-a10-recipenest.vercel.app/recipes/${_id}?email=${email}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.deletedCount > 0) {
                            return Swal.fire({
                                title: "Deleted!",
                                text: "Your Recipe has been deleted.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false
                            }).then(() => {

                                // Then navigate
                                navigate('/dashboard/my-recipes');
                            });
                        } else {
                            Swal.fire({
                                title: "Failed!",
                                text: "You can only delete your own recipe.",
                                icon: "error"
                            });
                        }
                    });
            }
        });
    };

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newRecipeData = Object.fromEntries(formData.entries())

        newRecipeData.categories = formData.getAll('categories');


        fetch(`https://b11-a10-recipenest.vercel.app/recipes/${_id}?email=${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Recipe update success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/all-recipes')
                }
            })
    }

    return (
        <div className='mb-16 md:mb-20'>
            <div className='p-4 relative'>
                <div className="card border border-green-600 shadow-sm bg-[#e0eebf]">
                    <figure className="px-10 pt-10">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl object-cover w-[426px] h-[280px] shadow-2xs" />
                    </figure>
                    <div className="card-body items-center space-y-1 text-center w-[90%] mx-auto">
                        <h2 className="card-title text-shadow-2x text-2xl">
                            {title}
                        </h2>

                        <h2>
                            <span className='font-medium text-base text-[#509E2F] text-shadow-2xs'>Cuisine Type :</span> {cuisine}
                        </h2>

                        <div className='text-base'>
                            <p>
                                <span className='font-medium text-base text-[#509E2F] text-shadow-2xs'>Ingredients :</span>  {ingredients}
                            </p>
                        </div>
                        <div className='text-base'>
                            <p>
                                <span className='font-medium text-base text-[#509E2F] text-shadow-2xs'>Instructions :</span> {instructions}
                            </p>
                        </div>
                        <div className='text-base'>
                            <p>
                                <span className='font-medium text-base text-[#509E2F] text-shadow-2xs'>Preparation Time :</span> {time}
                            </p>
                        </div>

                        <div className='flex gap-3 font-medium text-base'>
                            <p className='text-[#509E2F] text-shadow-2xs'>Category </p>
                            {
                                categories.map(category =>
                                    <p key={category} >{category} </p>)
                            }
                        </div>

                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 text-xl lg:text-2xl p-2'>

                            {email !== userEmail && (
                                <button onClick={handleLike} className='hover:scale-105 transition-all cursor-pointer hover:border-red-300 hover:bg-red-300 hover:text-red-500 text-red-400 border rounded-full p-1 text-shadow-2xs bg-red-200'>
                                    <FaHeart size={30} />
                                </button>
                            )}



                            <p >
                                {newLikeCount} People Like that
                            </p>

                            <p> </p>

                        </div>

                        {email === userEmail && (
                            <div className='bg-gray-300 p-3 rounded-xl my-3'>
                                {/* delete */}
                                <button className="mr-3.5 hover:bg-red-500 hover:text-green-100 cursor-pointer bg-red-400 rounded-full p-2 justify-center " onClick={() => handleDelete(_id)}>
                                    <MdDelete size={30} />
                                </button>
                                <button className=" bg-[#509E2F] cursor-pointer hover:text-green-100 p-2 rounded-full" onClick={() => document.getElementById('my_modal_1').showModal()}>
                                    <FaEdit size={30} />
                                </button>

                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box w-[70%]">
                                         {/*update  */}
                                        <form onSubmit={handleUpdate} className=''>
                                            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>

                                                <fieldset className="fieldset ">
                                                    <label className="label">Title</label>
                                                    <input type="text" name='title' className="input focus-visible:outline-none w-full" placeholder="Enter Title" />
                                                </fieldset>
                                                <fieldset className="fieldset ">
                                                    <label className="label">Ingredients</label>
                                                    <input type="text" name='ingredients' className="input focus-visible:outline-none w-full" placeholder="Enter Ingredients" />
                                                </fieldset>
                                                <fieldset className="fieldset ">
                                                    <label className="label">Instructions</label>
                                                    <input type="text" name='instructions' className="input focus-visible:outline-none w-full" placeholder="Enter Instructions" />
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
                                                    <input type="number" name='time' className="input focus-visible:outline-none w-full" placeholder="Preparation Time (in min)" />
                                                </fieldset>

                                                <fieldset className="fieldset ">
                                                    <label className="label">Image</label>
                                                    <input type="text" name='image' className="input focus-visible:outline-none w-full" placeholder="Image URL" />
                                                </fieldset>

                                                <input type="number" name="likeCount" defaultValue={0} hidden />
                                                <input type="email" name="email" value={userEmail} hidden readOnly />

                                            </div>

                                            <div>

                                                <fieldset className="fieldset">
                                                    <label className="label">Choose Categories</label>

                                                    <div className="grid grid-cols-2 lg:flex p-4 lg:p-2 justify-center rounded-lg gap-4 border border-gray-400">
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

                                                <input type="submit" className='btn mt-6  bg-[#84BD00] text-white rounded-full hover:bg-[#509E2F]' value="Update Recipe" />
                                            </div>
                                        </form>

                                        <div className="modal-action">
                                            <form method="dialog">

                                                <button className="btn bg-red-400 border-0 text-white">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        )}


                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipeDetails;