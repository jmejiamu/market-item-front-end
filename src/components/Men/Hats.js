import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, hatSelector } from '../../features/fetchHats/fetchHats'

const Hats = () => {

    const dispatch = useDispatch();
    const { hat, loading, hasError } = useSelector(hatSelector);

    // Error handling & map sucessfull query data
    const renderData = () => {
        if (loading) return <p>Loading...</p>
        if (hasError) return <p>Something went wrong</p>

        return hat.map((item, index) => {
            return (
                <div key={index} className='card card-style mt-5 grid-item mb-5'>
                    <img className="card-img-top img-style-popular" src={item.itemUrl} alt="men" />
                    <div className="card-body" >
                        <h5 className="card-title">{item.itemName}</h5>
                        <p className="card-text" >{item.itemDescription}</p>
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])
    return (
        <div className="container mx-auto px-5">
            <div className="grid-container">
                {renderData()}
            </div>

        </div>
    );
};

export default Hats;