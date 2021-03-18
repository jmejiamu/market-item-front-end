import { createSlice } from '@reduxjs/toolkit';

const newDataSlice = createSlice({
    name: 'newdata', // can be any name
    initialState: {
        loading: false,
        hasError: false,
        newdata: []
    },
    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSucess: (state, action) => {
            state.newdata = action.payload
            state.loading = false
            state.hasError = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

// thre action generated from the slice
export const { getData, getDataSucess, getDataFailure } = newDataSlice.actions

// seletor
export const newSelector = state => state.newdata

//  The reducer
export default newDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/news');
            const data = await response.json();

            dispatch(getDataSucess(data._embedded.news));
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}