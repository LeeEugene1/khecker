import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        LOGIN:(state, action) =>{
            state.user = action.payload
            // if(token){
            //     token = localStorage.setItem('token', token)
            // }else{
            //     token = localStorage.removeItem('token')
            // }
        },
        LOGOUT:(state) =>{
            state.user = null

        }
    }
})

export const {LOGIN,LOGOUT} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer