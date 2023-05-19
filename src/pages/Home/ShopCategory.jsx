import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {

    return (
        <div className='container mx-auto my-12'>
            <div className='flex flex-col justify-center items-center mb-6'>
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
                <p className="text-gray-600 lg:max-w-2xl text-center">
                    Explore our wide range of categories and find the perfect toy car for you or your loved ones. Whether you're a fan of classic muscle cars, sleek sports cars, or off-road adventures, we have something for everyone. Browse our collection and embark on a thrilling journey through the world of toy cars.
                </p>
            </div>
            <Tabs className={"flex flex-col justify-center items-center"}>
                <TabList className={"tabs"} >
                    <Tab className={"tab tab-lg tab-lifted"}>Sports Car</Tab>
                    <Tab className={"tab tab-lg tab-lifted"}>Police Car</Tab>
                    <Tab className={"tab tab-lg tab-lifted"}>Regular Car</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;