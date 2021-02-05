import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { fetchData, itemsSelector } from './features/counter/fetchSlice';
import './App.css';

const App = () => {

    const dispatch = useDispatch()
    const { info, loading, hasErrors } = useSelector(itemsSelector)

    console.log('INFO: ', info);

    // const [data, setData] = useState([]);

    // const getData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8080/api/womenItems');
    //         const resJson = await response.json();
    //         setData(resJson._embedded.womenItems);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        dispatch(fetchData())
        // getData();
    }, [dispatch])

    // error handling & map successful query data 
    const renderRecipes = () => {
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
            {renderRecipes()}
            {/* {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.itemName}</p>
                            <p>{item.id}</p>
                        </div>
                    )
                })

            } */}
        </div>
    );
}

export default App;
