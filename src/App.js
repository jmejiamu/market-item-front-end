import React from 'react';


import './App.css';

import '../src/components/styles/styles.scss';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenItems from './components/Men/MenItems';
import Woman from './components/Woman/Woman';

const App = () => {


    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact={true} path='/' render={props => <Home {...props} />} />
                    <Route exact={true} path='/mens' render={props => <MenItems {...props} />} />
                    <Route exact={true} path='/womens' render={props => <Woman {...props} />} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
