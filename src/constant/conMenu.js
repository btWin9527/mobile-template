/*
* 1. es6实现枚举
* @description
*   枚举特点：
*          · 枚举值不能重复    (ES6中Symbol解决其唯一性)
*          · 不能被修改        (Object.freeze()冻结对象，只开放读取权限)
*          · switch case可以直接判断
* */
const MENU_DATA = Object.freeze({
  man: Symbol('男'),
  // woman: Symbol('女')
  woman: Symbol('女')
})

export default MENU_DATA
