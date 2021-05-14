/*
 * @Description: 
 * @Author: chenzel
 * @Date: 2021-05-13 19:15:29
 * @LastEditTime: 2021-05-14 12:02:50
 * @LastEditors: chenzel
 */
'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  //验证码
  router.get('/captcha', controller.util.captcha)
}
