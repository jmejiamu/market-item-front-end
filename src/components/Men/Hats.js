import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, hatSelector } from '../../features/fetchHats/fetchHats'
import Card from '../itemsCard/Card'

const Hats = () => {

    const dispatch = useDispatch();
    const { hat, loading, hasError } = useSelector(hatSelector);

    // Error handling & map sucessfull query data
    const renderData = () => {
        if (loading) return <p>Loading...</p>
        if (hasError) return <p>Something went wrong</p>

        return hat.map((item, index) => {
            return (
                <Card item={item} />
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