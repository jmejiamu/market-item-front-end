import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className="container">
            <h2 className="category-title mt-8 mb-8">Category</h2>

            <div className="wrapper">
                <div class="row">
                    <div class="column">
                        <Link to='/mens'>
                            <img className="img-category" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Snow" style={{ width: '100 %' }} />

                            <div className="text" >Men</div>

                        </Link>
                    </div>
                    <div class="column">
                        <Link to="/womens" >
                            <img className="img-category" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80" alt="Snow" style={{ width: '100 %' }} />

                            <div className="text" >Women</div>
                        </Link>
                    </div>
                    <div class="column" >
                        <Link>
                            <img className="img-category" src="https://images.unsplash.com/photo-1557855506-3619a44bab73?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" alt="Snow" style={{ width: '100 %' }} />

                            <div className="text" >Electronics</div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;