/* 缓存相关的常量 */
const CACHE_DATA = Object.freeze({
  /* localStorage相关缓存 */
  localUserInfo: 'user', // 永久存储用户信息缓存
  /* sessionStorage相关缓存 */
  sesIsLogin: 'isLogin', // 暂时存储登录状态
  /* cookie相关缓存 */
  cooOpenActivity: 'isActive', // 存储与时间性相关的缓存，如首页弹窗活动每隔2天显示一次
})
