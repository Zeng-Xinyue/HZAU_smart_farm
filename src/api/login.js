import {get,post,authRequest} from './index.js'

//登录
export const toLogin = (body)=> {
    return post('/login',body);
}

//获取公钥
export const getPublicKey = ()=> {
    return get('/getPublicKey')
}
//获取用户信息，判断登录状态
export const getInfo = (body)=> {
    return authRequest('/get_info_by_token','post',body)
}