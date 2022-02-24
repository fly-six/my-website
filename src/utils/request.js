import axios from 'axios';
// import router from '@/router'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

const service = axios.create({
    baseURL: "http://192.168.101.2:9001/official",
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
    return service.post(url, data);
}

export function post1(url, data) {
    return service.post(url, data, { responseType: "arraybuffer" });
}
export function post2(url, data) {
    return service.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
}