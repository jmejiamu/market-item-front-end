import { createSlice } from '@reduxjs/toolkit'

// export const initialState = {
//     loading: false,
//     hasErrors: false,
//     info: []
// }


const itemsDataSlice = createSlice({
    name: 'info',
    initialState: {
        loading: false,
        hasErrors: false,
        info: []
    },
    reducers: {
        getData: state => {
            state.loading = true;
        },
        getDataSuccess: (state, action) => {
            state.info = action.payload
            state.loading = false
            state.hasErrors = false
        },
        getDataFailure: state => {
            state.loading = false
            state.hasErrors = true

        },
    },
})

//Three actions genereted from the slice
export const { getData, getDataSuccess, getDataFailure } = itemsDataSlice.actions


// selector
export const itemsSelector = state => state.info

// The reducer
export default itemsDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await fetch('http://localhost:8080/api/womenItems');
            const data = await response.json();

            // console.log('>>', data._embedded.womenItems);

            dispatch(getDataSuccess(data._embedded.womenItems))
        } catch (error) {
            dispatch(getDataFailure());
        }
    }
}
