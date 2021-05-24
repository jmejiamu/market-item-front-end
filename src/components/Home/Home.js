import React from 'react';



import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import NavBar from '../NavBar/NavBar';
import New from '../New/New';
import Popular from '../Popular/Popular';

const Home = () => {


    return (
        <>
            <NavBar />
            <Banner />
            <Category />
            <New />
            <Popular />
        </>
    );
};

export default Home;