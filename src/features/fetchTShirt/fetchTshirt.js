import { createSlice } from '@reduxjs/toolkit';

const tshirtDataSlice = createSlice({
    name: 'tshirt',
    initialState: {
        loading: false,
        hasError: false,
        tshirt: []
    },

    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSucess: (state, action) => {
            state.tshirt = action.payload
            state.loading = false
            state.hasError = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }

})

//Three action generated from the slice
export const { getData, getDataSucess, getDataFailure } = tshirtDataSlice.actions

// Selector 
export const tshirtSelector = state => state.tshirt

// The reducer
export default tshirtDataSlice.reducer

// Asynchrous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/mentshirts');
            const data = await response.json()
            dispatch(getDataSucess(data._embedded.menshirts))
        } catch (error) {
            dispatch(getDataFailure());

        }
    }
}