import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    info: []
}


const itemsData = createSlice({
    name: 'item data',
    initialState
})