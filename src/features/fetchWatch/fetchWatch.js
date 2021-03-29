import { createSlice } from '@reduxjs/toolkit';

const watchDataSlice = createSlice({
    name: 'watch',
    initialState: {
        loading: false,
        hasError: false,
        watch: []
    },
    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSucess: (state, action) => {
            state.watch = action.payload
            state.loading = false
            state.hasError = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

// Three action generated from the slice
export const { getData, getDataSucess, getDataFailure } = watchDataSlice.actions

// Selector
export const watchSelector = state => state.watch

// The reducer
export default watchDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/watches');
            const data = await response.json();

            dispatch(getDataSucess(data._embedded.watches))
        } catch (error) {
            dispatch(getDataFailure())
        }
    }
}