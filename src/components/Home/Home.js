import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, itemsSelector } from '../../features/counter/fetchSlice';
import Carousel from '../Carousel/Carousel';
import NavBar from '../NavBar/NavBar';

const Home = () => {

    const dispatch = useDispatch();

    const { info, loading, hasError } = useSelector(itemsSelector);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])


    // error handling & map successful query data 
    const renderData = () => {
        if (loading) return <p>Loading ...</p>
        if (hasError) return <p>An error has ocurrer ...</p>

        return info.map((item, index) => {
            return (
                <div key={index} className='card card-style mt-5 grid-item mb-5'>
                    <img className="card-img-top" src={item.itemUrl} alt="women" />
                    <div className="card-body" >
                        <h5 className="card-title">{item.itemName}</h5>
                        <p className="card-text" >{item.itemDescrition}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <NavBar />
            <Carousel />
            {/* <div className="grid-container">
                {renderData()}
            </div> */}
            <h2>Category</h2>
            <div class="row">
                <div class="column">
                    <img className="img-category" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Snow" style={{ width: '100 %' }} />
                </div>
                <div class="column">
                    <img className="img-category" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Snow" style={{ width: '100 %' }} />
                </div>
                <div class="column">
                    <img className="img-category" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Snow" style={{ width: '100 %' }} />
                </div>
            </div>
            <h2>New</h2>
            <h2>Popular</h2>
        </>
    );
};

export default Home;