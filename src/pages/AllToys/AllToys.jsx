import React, { useState } from 'react';
import AllToysRow from './AllToysRow';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="overflow-x-auto w-full container mx-auto my-12">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <AllToysRow key={toy._id} toy={toy} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;