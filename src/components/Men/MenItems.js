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
            <div class="sidebar-container">
                <div class="sidebar-logo">
                    Mens Items
                </div>
                <ul class="sidebar-navigation">
                    <li class="header">Men's clearance</li>
                    <li>
                        <a href="#t-shirt">
                            <i class="fa fa-home" aria-hidden="true"></i> T-shirt
                        </a>
                    </li>
                    <li>
                        <a href="#jackets">
                            <i class="fa fa-handshake-o" aria-hidden="true"></i> Jackets
                        </a>
                    </li>
                    <li class="header">Accesories</li>
                    <li>
                        <a href="#wallets">
                            <i class="fa fa-users" aria-hidden="true"></i> Wallet
                        </a>
                    </li>
                    <li>
                        <a href="#hats">
                            <i class="fa fa-cog" aria-hidden="true"></i> Hats
                        </a>
                    </li>
                    <li>
                        <a href="#watch">
                            <i class="fa fa-info-circle" aria-hidden="true"></i> Watch
                        </a>
                    </li>
                </ul>
            </div>

            <div class="content-container">

                <div class="container-fluid" id="t-shirt">

                    <div class="jumbotron">
                        <p className="text-xl font-semibold">T-Shirt</p>
                        <div className="grid-container" >
                            <Tshirt />
                        </div>
                    </div>

                </div>
                <div class="container-fluid" id="jackets">


                    <div class="jumbotron">
                        <p className="text-xl font-semibold">Jackets</p>
                        <div className="grid-container" >

                            <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div>
                            <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div>
                            <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div>
                            <div className='card card-style mt-5 grid-item mb-5'>
                                <img className="card-img-top img-style-popular" src="https://dummyimage.com/600x400/000/fff.jpg" alt="men" />
                                <div className="card-body" >
                                    <h5 className="card-title">Titlte</h5>
                                    <p className="card-text" >Text </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="container-fluid" id="wallets">


                    <div class="jumbotron">
                        <p className="text-xl font-semibold">Wallets</p>
                        <div className="grid-container" >
                            <Wallet />
                        </div>

                    </div>

                </div>

                <div class="container-fluid" id="hats">


                    <div class="jumbotron">
                        <p className="text-xl font-semibold">Hats</p>
                        <div className="grid-container" >
                            <Hats />
                        </div>

                    </div>

                </div>
                <div class="container-fluid" id="watch">


                    <div class="jumbotron">
                        <p className="text-xl font-semibold">Watch</p>
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