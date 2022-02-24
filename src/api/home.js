import {get, post, post1, post2, post3 } from '../utils/request';

export function getbanner() {
    return get('/banner/list');
}

export function getbannerList(params = {}) {
    return post('/banner/list', params);
}