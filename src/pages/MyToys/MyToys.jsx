import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useEffect } from 'react';
import { useState } from 'react';
import MyToysRow from './MyToysRow';
import UpdateToyModal from './UpdateToyModal';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [mytoys, setMyToys] = useState([])
    const url = `http://localhost:5000/my-toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    // const updateToyDetails = (id) => {

    // }

    return (
        <div className="overflow-x-auto w-full container mx-auto my-12">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Image</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mytoys.map((toy, index) => <MyToysRow key={toy._id} toy={toy} index={index} />)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default MyToys;