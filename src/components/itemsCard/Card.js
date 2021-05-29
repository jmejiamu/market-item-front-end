import React from 'react'

import { useDispatch } from 'react-redux';

import { addItemToCartAsync } from '../../features/cartPost/cartData'

const Card = (props) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            addItemToCartAsync({
                itemName: props.item.itemName,
                itemDescription: props.item.itemDescription,
                itemUrl: props.item.itemUrl
            })
        )
    }

    return (
        <div key={props.index} className="max-w-sm space-y-2 rounded overflow-hidden shadow-lg mb-10 ">
            <img class="w-full h-screen" src={props.item.itemUrl} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.item.itemName}</div>
                <p class="text-gray-700 text-base">
                    {props.item.itemDescription}
                </p>
                <button onClick={addToCart} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                    Add to cart
                </button>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default Card
