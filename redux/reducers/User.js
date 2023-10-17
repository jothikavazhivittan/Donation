import { createSlice } from "@reduxjs/toolkit";
const initialState={
    firstName:"Jothika",
    lastName:"Vazhivittan",
    userId:1,
    profileImage:"https://img.freepik.com/free-vector/clothing-donation-concept-flat-hand-drawn_52683-55267.jpg?w=900&t=st=1697361522~exp=1697362122~hmac=276147d6442b01e50b2432d3a1ced9d7e184d9a460c274a5b0f0d1a1ae3cf696"
}
export const User=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        updateFirstName:(state,action)=>{
            state.firstName=action.payload.firstName
        },
        resetToInitialState:()=>{
         return initialState
        }
    }
})
export const{updateFirstName,resetToInitialState}=User.actions;
export default User.reducer;