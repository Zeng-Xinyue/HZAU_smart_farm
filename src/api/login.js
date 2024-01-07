import {get,post,authRequest} from './index.js'

export const farmerLogin = (body)=> {
    return post('/login',body);
}