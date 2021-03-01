import { createSlice } from '@reduxjs/toolkit';

const carouselDataSlice = createSlice({
    name: 'carousel',
    initialState: {
        loading: false,
        hasError: false,
        carousel: []
    },
    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.carousel = action.payload
            state.loading = false
            state.hasError = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

// three actions generated from  the slice
export const { getData, getDataSuccess, getDataFailure } = carouselDataSlice.actions

// selector 
export const carouselSelector = state => state.carousel

// The reducer
export default carouselDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/carousels');
            const data = await response.json();

            dispatch(getDataSuccess(data._embedded.carousels))
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}