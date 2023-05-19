import React from 'react';
import ShopCategory from './ShopCategory';
import Banner from './Banner';
import GallerySection from './GallerySection';


const Home = () => {
    return (
        <div>
            <Banner />
            <GallerySection/>
            <ShopCategory />
        </div>
    );
};

export default Home;