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
                itemUrl: payload.itemUrl,
                price: payload.price
            })
        })
    }
)

export const deleteItemCartAsync = createAsyncThunk(
    'cart/deleteItemCartAsync',
    async (payload) => {
        // console.log(payload);
        try {

            const response = await fetch(`http://localhost:8080/api/carts/${payload.item}`, {
                method: 'DELETE'
            })

            return { payload: payload.item }

        } catch (error) {
            console.error(error);
        }
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
        },
        [deleteItemCartAsync.fulfilled]: (state, action) => {
            // state.cart = action.payload
            return { cart: state.cart.filter((item) => item.id !== action.payload.payload) }
            // console.log('=====', action.payload.payload);
            // console.log('=====', state);

        }
    }
})

// Three action generated from the slice
export const { getData, getDataSuccess, getDataFailure, deleteTodo } = cartItemSlice.actions

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