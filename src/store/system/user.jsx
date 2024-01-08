import { createSlice } from '@reduxjs/toolkit'
// import defaultImg from '@common/image/default.jpg'

const tokenStorage = localStorage.getItem('tokenStorage')

//普通用户初始值
const initialState = {
    name:"default",
    usename:'',
    token:tokenStorage?tokenStorage:'',
    phone:'',
    role:'',
    // avator:defaultImg,
}

export const user = createSlice({
    name:"user",
    initialState,
    reducers:{
        setName(){

        }
    }
})