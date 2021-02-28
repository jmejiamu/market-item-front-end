import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, itemsSelector } from '../../features/counter/fetchSlice';
import Carousel from '../Carousel/Carousel';
import Category from '../Category/Category';
import NavBar from '../NavBar/NavBar';
import New from '../New/New';

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
            <Category />
            <New />
            <div className="container" >
                <h2 className="popular-title">Popular</h2>
                <div className="grid-container" >

                    <div className='card card-style mt-5 grid-item mb-5'>
                        <img className="card-img-top img-style-popular" src="https://images.unsplash.com/photo-1563293958-0159cd7dd208?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80" alt="men" />
                        <div className="card-body" >
                            <h5 className="card-title">Mens Jacket</h5>
                            <p className="card-text" >Description</p>
                        </div>
                    </div>
                    <div className='card card-style mt-5 grid-item mb-5'>
                        <img className="card-img-top img-style-popular" src="https://images.unsplash.com/photo-1560528238-73adf75ca6da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="men" />
                        <div className="card-body" >
                            <h5 className="card-title">Mens Jacket</h5>
                            <p className="card-text" >Description</p>
                        </div>
                    </div>
                    <div className='card card-style mt-5 grid-item mb-5'>
                        <img className="card-img-top img-style-popular" src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=618&q=80" alt="men" />
                        <div className="card-body" >
                            <h5 className="card-title">Mens Jacket</h5>
                            <p className="card-text" >Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;