
/**
 * 所有 API都返回一个Promise对象
 */
import ajax from './ajax';


/**
 * 请求位置信息
 * @param {string} latitude 纬度
 * @param {string} longtitude 经度
 */
export function reqAddress(latitude=40.10038,longtitude=116.36867) {
    return ajax.get(`position/${latitude},${longtitude}`);
}

/**
 * 请求商品分类列表
 */
export function reqCategories(token){
    return ajax({
        url:'/index_category',
        headers:{
            token
        }
    });
}

/**
 * 
 * 请求附近商铺
 * @param {object} address  位置的经纬度信息
 */
export function reqShops({longitude,latitude,token}){
    return ajax.get('/shops',{
        params:{
            latitude,
            longitude,
        },
        headers:{
            token
        }
    });
}

/**
 * 搜索商铺
 * @param {string} keyword 
 * @param {string} geohash 列子：geohash=40.10038,116.36867
 */
export function reqSearchShops(keyword,geohash){
    return ajax.get('/search_shops',{params:{keyword,geohash}});
}

/**
 * 图片验证码
 */
export function reqCaptcha() {
    return ajax.get('/captcha');
}
/**
 * 密码登录
 * @param {string} name 用户名
 * @param {string} pwd 密码
 * @param {string} captcha 验证码
 */
export function reqLoginByPassword(name,pwd,captcha) {
    return ajax.post('/login_pwd',{
        name,
        pwd,
        captcha
    });
}

/**
 * 手机验证码
 * @param {string} phone 
 */
export function reqSendCode(phone) {
    return ajax.get('/sendcode',{
        params:{
            phone
        }
    });
}
/**
 * 短信登录
 * @param {string} phone 手机号
 * @param {string} code 验证码
 */
export function reqLoginSMS(phone,code) {
    return ajax.post('/login_sms',{
        phone,
        code
    });   
}
/**
 * 根据会话获取用户信息
 */
export function reqUserInfo(){
    return ajax.get('/userinfo');
}

/**
 * 自动登录
 * @param {string} token 
 * 
 */
export function reqAutoLogin(token) {
    return ajax.get('/auto_login',{headers:{token}})
}

/**
 * 获取食品列表
 */
export function reqGoods(){
    return ajax.get('/goods');
}
/** 
 * 获取评论列表
*/
export function reqRatings() {
    return ajax.get('/ratings');
}

/**
 * 获取商家信息
 */
export function reqInfo() {
    return ajax.get('/info')
}