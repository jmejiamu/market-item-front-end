import React from 'react'

const Card = (props) => {
    return (
        <div key={props.index} className='card card-style mt-5 grid-item mb-5'>
            <img className="card-img-top img-style-popular" src={props.item.itemUrl} alt="men" />
            <div className="card-body" >
                <h5 className="card-title">{props.item.itemName}</h5>
                <p className="card-text" >{props.item.itemDescription}</p>
            </div>
        </div>
    )
}

export default Card
