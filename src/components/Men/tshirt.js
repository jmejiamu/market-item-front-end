import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, tshirtSelector } from '../../features/fetchTShirt/fetchTshirt';


const Tshirt = () => {
    const dispatch = useDispatch();
    const { tshirt, loading, hasError } = useSelector(tshirtSelector);

    // Error handeling & map successfull query data
    const renderData = () => {
        if (loading) return <p className="donutSpinner"></p>
        if (hasError) return <p className="pulseBtn"> Something went wrong...</p>

        return tshirt.map((item, index) => {
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
        <div className="container" >
            <h2 className="popular-title">T-Shirt</h2>
            <div className="grid-container" >
                {renderData()}
            </div>
        </div>
    );
};

export default Tshirt;