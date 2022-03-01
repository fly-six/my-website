import {get, post, post1, post2, post3 } from '../utils/request';

/**
 * POST
 * @name banner图接口
 * @param {display:展示位置:1、首页，2、alot管理平台，3、企业案例，4、新闻媒体，5、招商代理，6、关于中南,adaptation:设备端:1：PC端，2：APP端} params 参数条件
 * @returns 
 */
export function getbannerList(params = {}) {
    return post('/banner/list', params);
}

/**
 * POST
 * @name 企业案例接口
 * @param {*} params 页数:pageNum，条数:pageSize
 * @returns 
 */
export function getEnterpriseList(params) {
    return post('/enterprise/list', params);
}



/**
 * POST
 * @name 新闻媒体接口
 * @param {*} params classify 1:行业资讯，2：企业动态
 * @returns 
 */
export function getNewsList(params) {
    return post('/news/list', params);
}