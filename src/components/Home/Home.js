import React from 'react';



import Carousel from '../Carousel/Carousel';
import Category from '../Category/Category';
import NavBar from '../NavBar/NavBar';
import New from '../New/New';
import Popular from '../Popular/Popular';

const Home = () => {


    return (
        <>
            <NavBar />
            <Carousel />
            <Category />
            <New />
            <Popular />
        </>
    );
};

export default Home;