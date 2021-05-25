import React from 'react'

const Card = (props) => {
    return (
        <div key={props.index} className="max-w-sm space-y-2 rounded overflow-hidden shadow-lg mb-10 ">
            <img class="w-full h-screen" src={props.item.itemUrl} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.item.itemName}</div>
                <p class="text-gray-700 text-base">
                    {props.item.itemDescription}
                </p>
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
