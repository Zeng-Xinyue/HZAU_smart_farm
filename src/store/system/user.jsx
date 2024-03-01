import { createSlice } from '@reduxjs/toolkit'
import defaultImg from '@/common/image/default.jpg'

const tokenStorage = localStorage.getItem('tokenStorage')

//普通用户初始值
const initialState = {
    name:"momo",
    id:'',    
    usename:'',
    token:tokenStorage?tokenStorage:'',
    phone:'',
    role:'',
    avator:defaultImg,
}

export const user = createSlice({
    name:"user",
    initialState,
    reducers:{
        setName: (state, action) => {
            state.name = action.payload;
        },
        setUserInfo(state,action){
            state.id = action.payload.id,
            state.phone = action.payload.phone
        }
    }
})

export const {setName} = user.actions;
export const {setUserInfo} = user.actions;

export default user.reducer;
