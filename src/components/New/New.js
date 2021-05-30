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
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mb-10 ">
                    <img className="w-full h-screen" src={item.itemUrl} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.itemName}</div>
                        <p className="text-gray-700 text-base">
                            {item.itemDescription}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    return (
        <div className="container mx-auto px-5" >
            <p className="new-title text-xl font-semibold  mt-8 mb-8">New</p>
            <div className="grid-container" >
                {renderData()}
            </div>
        </div>
    );
};

export default New;