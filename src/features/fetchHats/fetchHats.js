import { createSlice } from '@reduxjs/toolkit';

const hatDataSlice = createSlice({
    name: 'hat',
    initialState: {
        loading: false,
        hasError: false,
        hat: []
    },

    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.hat = action.payload
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
export const { getData, getDataSuccess, getDataFailure } = hatDataSlice.actions

// Selector
export const hatSelector = state => state.hat

// The reducer
export default hatDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/mensHats');
            const data = await response.json();
            console.log(data);
            dispatch(getDataSuccess(data._embedded.mensHats))
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}