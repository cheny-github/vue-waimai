
/**
 * 所有 API都返回一个Promise对象
 */
import ajax from './ajax';


/**
 * 
 * @param {string} latitude 纬度
 * @param {string} longtitude 经度
 */
export function reqAddress(latitude,longtitude) {
    return ajax.get(`xxx`)
}