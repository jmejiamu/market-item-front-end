import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, newSelector } from '../../features/fetchNew/fetchNew';


const New = () => {
    const dispatch = useDispatch();

    const { newdata, loading, hasError } = useSelector(newSelector);


    const renderData = () => {
        if (loading) return <p className="donutSpinner"></p>
        if (hasError) return <p className="pulseBtn">Something wrong ...</p>

        return newdata.map((item, index) => {
            return (
                <div key={index} className='card card-style mt-5 grid-item mb-5'>
                    <img className="card-img-top img-style" src={item.itemUrl} alt="men" />
                    <div className="card-body" >
                        <h5 className="card-title">{item.itemName}</h5>
                        <p className="card-text" >{item.itemDescription}</p>
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    return (
        <div className="container" >
            <h2 className="new-title ">New</h2>
            <div className="grid-container" >
                {renderData()}


            </div>
        </div>
    );
};

export default New;