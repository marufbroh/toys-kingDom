import React from 'react';

const AllToysRow = ({ toy, index }) => {
    console.log(toy);
    const { toy_name, seller_name, sub_category, quantity, price } = toy;
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td><button className='btn btn-sm'>View Details</button></td>
        </tr>
    );
};

export default AllToysRow;