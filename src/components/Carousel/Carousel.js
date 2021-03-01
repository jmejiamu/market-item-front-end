import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, carouselSelector } from '../../features/fetchCarousel/fetchCarousel';

const Carousel = () => {

    const dispatch = useDispatch();

    const { carousel, loading, hasError } = useSelector(carouselSelector);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    const renderData = () => {
        if (loading) return <p>Loading ...</p>
        if (hasError) return <p>An error has ocurrer ...</p>

        return carousel.map((item, index) => {
            return (
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={item.url} className="d-block w-100 carousel-img " alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            )
        })
    }

    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {
                            // fix this 
                            carousel.map((item, index) => {
                                return (
                                    <>
                                        <img src={item.url} className="d-block w-100 carousel-img " alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
        // <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        //     <ol class="carousel-indicators">
        //         <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        //         <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        //     </ol>
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //             <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="d-block w-100 carousel-img " alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>Convers</h5>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </div>
        //         </div>
        //         <div class="carousel-item">
        //             <img src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" class="d-block w-100 carousel-img " alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>Jackets</h5>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </div>
        //         </div>
        //         <div class="carousel-item">
        //             <img src="https://images.unsplash.com/photo-1504707748692-419802cf939d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80" class="d-block w-100 carousel-img" alt="..." />
        //             <div class="carousel-caption d-none d-md-block">
        //                 <h5>Third slide label</h5>
        //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //             </div>
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>
    );
};

export default Carousel;