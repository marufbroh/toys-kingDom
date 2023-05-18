import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className="py-6 lg:py-24">
            <div className=" bg-white rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
                <form className="w-full p-8">
                    <h2 className="text-2xl font-semibold text-orange-950 text-center">Login</h2>
                    {/* <p className="text-xl text-gray-600 text-center">Please Login!</p> */}
                    <div className="mt-4">
                        <label className="block text-orange-950 text-sm font-bold mb-2">Email Address</label>
                        <input className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-orange-950 text-sm font-bold mb-2">Password</label>
                            <p className="text-xs text-gray-500 cursor-pointer hover:text-orange-950">Forget Password?</p>
                        </div>
                        <input className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
                    </div>
                    <div className="mt-8">
                        <button className="bg-orange-950 text-white font-bold py-2 px-4 w-full rounded" type='submit'>Login</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <p className="text-sm text-center text-gray-500">Don't have an account? <Link to={"/register"} className='underline hover:text-orange-950'>Register</Link></p>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                    {/* <div className='mt-4'>
                        {
                            error ? <p className="text-sm text-center text-red-600">
                                {error}
                            </p> :
                                <p className="text-sm text-center text-green-500">
                                    {success}
                                </p>
                        }
                    </div> */}
                    <div className='flex flex-col'>
                        <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md">
                            <FaGoogle className='text-black' />
                            <span className="py-3 text-center text-gray-600 font-bold">Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;