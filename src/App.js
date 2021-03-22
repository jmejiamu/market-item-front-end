import React from 'react';


import './App.css';

import '../src/components/styles/styles.scss';
import Home from './components/Home/Home';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MenItems from './components/Men/MenItems';

const App = () => {


    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact={true} path='/' render={props => <Home {...props} />} />
                    <Route exact={true} path='/mens' render={props => <MenItems {...props} />} />
                    {/* <Route exact path='/mens' component={MenItems} /> */}
                </Switch>


            </div>
        </BrowserRouter>
    );
}

export default App;
