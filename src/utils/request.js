import axios from 'axios';
import qs from 'qs'

// import router from '@/router'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

const service = axios.create({
    // baseURL: "http://dev-market.zgzhongnan.com:9001/official",//本地
    baseURL: "http://test-os-admin.zgzhongnan.com/official-system", //测试环境
    timeout: 80000, // request timeout
});
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    })
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
)

export function get(url) {
    return service.get(url);
}

export function post(url, data) {
    return service.post(url, qs.stringify(data), { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' } });
}