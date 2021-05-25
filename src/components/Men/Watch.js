import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, watchSelector } from '../../features/fetchWatch/fetchWatch';
import Card from '../itemsCard/Card';

const Watch = () => {

    const dispatch = useDispatch();
    const { watch, loading, hasError } = useSelector(watchSelector);

    // Error handling & map successfull query data
    const renderData = () => {
        if (loading) return <p>Loading...</p>
        if (hasError) return <p>Something went wrong...</p>

        return watch.map((item, index) => {
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

            <div className="grid-container" >
                {renderData()}
            </div>
        </div>
    );
};

export default Watch;