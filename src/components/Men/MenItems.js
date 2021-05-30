import React from 'react';
import NavBar from '../NavBar/NavBar';
import Hats from './Hats';
import Tshirt from './Tshirt';
import Wallet from './Wallet';
import Watch from './Watch';


const MenItems = () => {
    return (

        <>

            <NavBar />
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    Mens Items
                </div>
                <ul className="sidebar-navigation">
                    <li className="header">Men's clearance</li>
                    <li>
                        <a href="#t-shirt">
                            <i className="fa fa-home" aria-hidden="true"></i> T-shirt
                        </a>
                    </li>

                    <li className="header">Accesories</li>
                    <li>
                        <a href="#wallets">
                            <i className="fa fa-users" aria-hidden="true"></i> Wallet
                        </a>
                    </li>
                    <li>
                        <a href="#hats">
                            <i className="fa fa-cog" aria-hidden="true"></i> Hats
                        </a>
                    </li>
                    <li>
                        <a href="#watch">
                            <i className="fa fa-info-circle" aria-hidden="true"></i> Watch
                        </a>
                    </li>
                </ul>
            </div>

            <div className="content-container">

                <div className="container-fluid" id="t-shirt">

                    <div className="jumbotron">
                        <p className="text-xl font-semibold mx-auto px-5">T-Shirt</p>
                        <div className="grid-container" >
                            <Tshirt />
                        </div>
                    </div>

                </div>

                <div className="container-fluid" id="wallets">


                    <div className="jumbotron">
                        <p className="text-xl font-semibold mx-auto px-5">Wallets</p>
                        <div className="grid-container" >
                            <Wallet />
                        </div>

                    </div>

                </div>

                <div className="container-fluid" id="hats">


                    <div className="jumbotron">
                        <p className="text-xl font-semibold mx-auto px-5">Hats</p>
                        <div className="grid-container" >
                            <Hats />
                        </div>

                    </div>

                </div>
                <div className="container-fluid" id="watch">


                    <div className="jumbotron">
                        <p className="text-xl font-semibold mx-auto px-5">Watch</p>
                        <div className="grid-container" >
                            <Watch />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default MenItems;