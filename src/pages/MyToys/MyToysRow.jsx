import React from 'react';
import UpdateToyModal from './UpdateToyModal';

const MyToysRow = ({ toy, index }) => {
    const { _id, toy_name, toy_img, seller_name, sub_category, quantity, price } = toy;
    return (
        <>
            <tr>
                <th>
                    <button className="btn btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={toy_img} alt="Service Img" />
                        </div>
                    </div>
                </td>
                <td>{toy_name}</td>
                <td>{sub_category}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <th>
                    <label  htmlFor="my-modal-6" className="btn btn-sm">Edit</label>
                    <UpdateToyModal toy={toy} />
                </th>
            </tr>

        </>
    );
};

export default MyToysRow;