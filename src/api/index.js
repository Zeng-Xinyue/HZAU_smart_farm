import axios from 'axios'
import {globalRouters} from '@/router'

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json', // 设置请求头
    },
})

// 封装 GET 请求
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params })
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

// 封装 POST 请求
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

//封装需要token的请求
export const authRequest = (url, method, data = {}) => {
    const authToken = localStorage.getItem('tokenStorage');

    return new Promise((resolve, reject) => {
        instance({
            url,
            method,
            data,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};

export const goto = (path) => {
    globalRouters.navigate(path)
}

export default instance