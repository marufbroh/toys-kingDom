import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useEffect } from 'react';
import { useState } from 'react';

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
    console.log(mytoys);
    return (
        <div>
            My Toys
        </div>
    );
};

export default MyToys;