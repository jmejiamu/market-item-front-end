import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, tshirtSelector } from '../../features/fetchTShirt/fetchTshirt';
import Card from '../itemsCard/Card';


const Tshirt = () => {
    const dispatch = useDispatch();
    const { tshirt, loading, hasError } = useSelector(tshirtSelector);

    // Error handeling & map successfull query data
    const renderData = () => {
        if (loading) return <p className="donutSpinner"></p>
        if (hasError) return <p className="pulseBtn"> Something went wrong...</p>

        return tshirt.map((item, index) => {
            return (
                <Card item={item} />
            )
        })

    }

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])


    return (
        <div className="container mx-auto px-5" >
            <div className="grid-container" >
                {renderData()}
            </div>
        </div>
    );
};

export default Tshirt;