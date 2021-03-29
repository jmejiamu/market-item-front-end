import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, watchSelector } from '../../features/fetchWatch/fetchWatch';

const Watch = () => {

    const dispatch = useDispatch();
    const { watch, loading, hasError } = useSelector(watchSelector);

    // Error handling & map successfull query data
    const renderData = () => {
        if (loading) return <p>Loading...</p>
        if (hasError) return <p>Something went wrong...</p>

        return watch.map((item, index) => {
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
        <div className="grid-container" >
            {renderData()}
        </div>
    );
};

export default Watch;