import {get,post,authRequest} from './index.js'

export const getExpertList = () => {
    return get('/select_expert_list')
}