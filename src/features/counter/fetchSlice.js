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
        getRecipes: state => {
            state.loading = true;
        },
        getRecipesSuccess: (state, { payload }) => {
            state.info = payload
            state.loading = false
            state.hasErrors = false
        },
        getRecipesFailure: state => {
            state.loading = false
            state.hasErrors = true

        },
    },
})

//Three actions genereted from the slice
export const { getRecipes, getRecipesSuccess, getRecipesFailure } = itemsDataSlice.actions


// selector
export const itemsSelector = state => state.info
// The reducer
export default itemsDataSlice.reducer

// Asynchronous thunk action
export function fetchData() {
    return async dispatch => {
        dispatch(getRecipes())

        try {
            const response = await fetch('http://localhost:8080/api/womenItems');
            const data = await response.json();

            console.log('>>', data._embedded.womenItems);

            dispatch(getRecipesSuccess(data._embedded.womenItems))
        } catch (error) {
            dispatch(getRecipesFailure());
        }
    }
}
