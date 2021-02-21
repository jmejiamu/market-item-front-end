import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, itemsSelector } from '../../features/counter/fetchSlice';

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
        <div className="grid-container">

            {renderData()}
        </div>
    );
};

export default Home;