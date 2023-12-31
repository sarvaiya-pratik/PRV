import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getalluser = createAsyncThunk('users/all',async()=>{
    try {
        const res = await axios.get('/users',{withCredentials:true})
        return res.data
        
    } catch (error) {
        throw error
    }
})

export const getusercurrent = createAsyncThunk('/users/currentuser',async()=>{
    try {
        const response = await axios.get('/users/currentuser',{withCredentials:true})
        if (response.status === 200) {
            return response.data
        } else {
            
            throw response.data.error
        }

    } catch (error) {
        throw error
    }
})

export const updateuser = createAsyncThunk('users/update',async({updatedUser,uid})=>{
    try {
        
        const response = await axios.put(`/users/update/${uid}`,updatedUser)
        return response.data
    

    } catch (error) {
        throw error
    }       
})
export const updateuseraddress = createAsyncThunk('users/update/address',async({addressData,uid})=>{
    try {
        const response = await axios.put(`/users/update/address/${uid}`,addressData)
        console.log("response",response.data)
        return response.data

    } catch (error) {
        throw error
    }       
})

