import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            // const response = await fetch('http://localhost:8080/womenitems');
            const response = await fetch('http://localhost:8080/api/womenItems');
            const resJson = await response.json();
            setData(resJson._embedded.womenItems);
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
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.itemName}</p>
                            <p>{item.id}</p>
                        </div>
                    )
                })

            }
        </div>
    );
}

export default App;
