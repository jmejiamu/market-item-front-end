import React, { useEffect, } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { fetchData, itemsSelector } from './features/counter/fetchSlice';
import './App.css';

const App = () => {

    const dispatch = useDispatch()
    const { info, loading, hasErrors } = useSelector(itemsSelector)

    console.log('INFO: ', info);

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    // error handling & map successful query data 
    const renderData = () => {
        if (loading) return <p>Loading recipes...</p>
        if (hasErrors) return <p>Cannot display recipes...</p>

        return info.map((recipe, index) =>
            <div key={index} className='tile'>
                <h2>{recipe.itemName}</h2>
            </div>
        )
    }
    return (
        <div className="App">
            <h1>Market Item</h1>
            {renderData()}
        </div>
    );
}

export default App;
