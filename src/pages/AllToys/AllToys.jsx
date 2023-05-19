import React from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
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
                    </tr>
                </thead>
                <tbody>
                    <AllToysRow />
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;