import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8080/womenitems'
            );
            const resJson = await response.json();
            console.log('>>>>>>>', resJson);
            setData(resJson);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="App">
            <h1>Market Item</h1>
            {
                data.map((items, index) => {
                    return (
                        <div key={index}>
                            <p>{items.itemName}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default App;
