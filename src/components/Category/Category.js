import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className="container">
            <h2 className="category-title mt-5 mb-5">Category</h2>

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
                            <img className="img-category" src="https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Snow" style={{ width: '100 %' }} />

                            <div className="text" >Women</div>
                        </Link>
                    </div>
                    <div class="column" >
                        <img className="img-category" src="https://images.unsplash.com/photo-1557855506-3619a44bab73?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" alt="Snow" style={{ width: '100 %' }} />

                        <div className="text" >Electronics</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;