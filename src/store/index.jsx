import { configureStore } from '@reduxjs/toolkit'
// 引入主题换肤store分库
import themeReducer from '@/store/slices/theme'

import userReducer from '@/store/system/user'


export const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme: themeReducer,
    user: userReducer
  },
})