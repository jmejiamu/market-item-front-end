import React, { useEffect, } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { fetchData, itemsSelector } from './features/counter/fetchSlice';
import './App.css';

import '../src/components/styles/styles.scss';
import Home from './components/Home/Home';

const App = () => {

    // const dispatch = useDispatch()
    // const { info, loading, hasErrors } = useSelector(itemsSelector)

    // console.log('INFO: ', info);

    // useEffect(() => {
    //     dispatch(fetchData())
    // }, [dispatch])

    // error handling & map successful query data 
    // const renderData = () => {
    //     if (loading) return <p>Loading recipes...</p>
    //     if (hasErrors) return <p>Cannot display recipes...</p>

    //     return info.map((item, index) =>
    //         <div key={index} className='card card-style mt-5 grid-item mb-5'>
    //             <img className="card-img-top" src={item.itemUrl} alt="women" />
    //             <div className="card-body" >
    //                 <h5 className="card-title">{item.itemName}</h5>
    //                 <p className="card-text" >{item.itemDescrition}</p>
    //             </div>
    //         </div>


    //     )
    // }

    return (
        <div className="App">
            {/* <div className="grid-container">

                {renderData()}
            </div> */}
            <Home />

        </div>
    );
}

export default App;
