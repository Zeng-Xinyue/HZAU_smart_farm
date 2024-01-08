import {get,post,authRequest} from './index.js'

//登录
export const toLogin = (body)=> {
    return post('/login',body);
}

//获取公钥
export const getPublicKey = ()=> {
    return get('/getPublicKey')
}