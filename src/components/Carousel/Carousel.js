import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, carouselSelector } from '../../features/fetchCarousel/fetchCarousel';

const Carousel = () => {

    const dispatch = useDispatch();

    const { carousel, loading, hasError } = useSelector(carouselSelector);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])


    return (
        <div>
            <section>
                <div>
                    <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" class="h-screen w-full object-fit-cover" />
                </div>
            </section>
        </div>
    );
};

export default Carousel;