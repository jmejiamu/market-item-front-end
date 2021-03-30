import { createSlice } from '@reduxjs/toolkit';

const walletDataSlice = createSlice({
    name: 'wallet',
    initialState: {
        loading: false,
        hasError: false,
        wallet: []
    },
    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.wallet = action.payload
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
export const { getData, getDataSuccess, getDataFailure } = walletDataSlice.actions

// Selector
export const walletSector = state => state.wallet

// The reducer
export default walletDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/menWallets');
            const data = await response.json();

            dispatch(getDataSuccess(data._embedded.menWallets))
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}

