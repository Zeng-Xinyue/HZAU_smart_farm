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
    const authToken = localStorage.getItem('token');

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
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
// instance.interceptors.request.use(
//     config => {
//         // 将 token 添加到请求头
//         token && (config.headers.Authorization = token)
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

// // 添加响应拦截器
// instance.interceptors.response.use(
//     response => {
//         if (response.status === 200) {
//             return Promise.resolve(response)
//         } else {
//             return Promise.reject(response)
//         }
//     },
//     error => {
//         // 相应错误处理,比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
//         switch (error.response.status) {
//             case 401:
//                 break
//             case 403:
//                 break
//             case 404:
//                 break
//             case 500:
//                 break
//             default:
//                 console.log('其他错误信息')
//         }
//         return Promise.reject(error)
//     }
// )

export default instance