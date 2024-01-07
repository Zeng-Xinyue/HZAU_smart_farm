import {get,post,authRequest} from './index.js'

//用户注册
export const toRegisteUser = (body)=> {
    return post('/register',body);
}