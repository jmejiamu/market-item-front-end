import { createSlice } from '@reduxjs/toolkit';

const popularDataSlice = createSlice({
    name: 'popular',
    initialState: {
        loading: false,
        hasError: false,
        popular: []
    },

    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.popular = action.payload
            state.loading = false
            state.hasError = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

// three action generated from the slice
export const { getData, getDataSuccess, getDataFailure } = popularDataSlice.actions


// Selector
export const popularSelector = state => state.popular

// The reducer 
export default popularDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetchData('http://localhost:8080/api/news');
            const data = await response.json();

            dispatch(getDataSuccess(data._embedded.populars))
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}