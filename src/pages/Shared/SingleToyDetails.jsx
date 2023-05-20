import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    return (
        <div className='container mx-auto my-12'>
            fdf
        </div>
    );
};

export default SingleToyDetails;