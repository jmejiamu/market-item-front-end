import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, popularSelector } from '../../features/fetchPopular/fetchPopular';


const Popular = () => {
    const dispatch = useDispatch();
    const { popular, loading, hasError } = useSelector(popularSelector);

    // Error handling & map successful query data
    const renderData = () => {
        if (loading) return <p>Loading ...</p>
        if (hasError) return <p>Something wrong may happends</p>

        return popular.map((item, index) => {
            return (
                <div key={index} className='card card-style mt-5 grid-item mb-5'>
                    <img className="card-img-top img-style-popular" src={item.itemUrl} alt="men" />
                    <div className="card-body" >
                        <h5 className="card-title">{item.itemName}</h5>
                        <p className="card-text" >{item.description}</p>
                    </div>
                </div>
            )
        })

    }

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])
    return (
        <div className="container" >
            <h2 className="popular-title">Popular</h2>
            <div className="grid-container" >
                {renderData()}

            </div>
        </div>
    );
};

export default Popular;