import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const usersSlice = createSlice({
    name:'users',
    initialState:{
        list:[]
    },
    reducers:{
        setUsersList:(state,action)=>{
            state.list = action.payload;
        }
    },
})

export default usersSlice.reducer

export const {setUsersList} = usersSlice.actions;

export const fetchAllUsers = ()=>(dispatch)=>{
    axios
    .get('https://reqres.in/api/users?per_page=12')
    .then((response)=>{
        dispatch(setUsersList(response.data.data))
    })
    .catch((error)=>{
        console.log(error)
    })
}