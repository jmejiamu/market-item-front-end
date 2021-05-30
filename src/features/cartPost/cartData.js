import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const addItemToCartAsync = createAsyncThunk(
    'cart/addItemToCartAsync',
    async (payload) => {
        const response = await fetch('http://localhost:8080/api/carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemName: payload.itemName,
                itemDescription: payload.itemDescription,
                itemUrl: payload.itemUrl
            })
        })
    }
)

const cartItemSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        hasError: false,
        cart: []
    },

    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.cart = action.payload
            state.loading = false
            state.hasError = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasError = true
        },


    },
    extraReducers: {
        [addItemToCartAsync.fulfilled]: (state, action) => {
            state.cart = action.payload
        }
    }
})

// Three action generated from the slice
export const { getData, getDataSuccess, getDataFailure, } = cartItemSlice.actions

// Selector
export const cartSelector = state => state.cart

// The reducer
export default cartItemSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/carts');
            const data = await response.json();

            dispatch(getDataSuccess(data._embedded.carts))
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}