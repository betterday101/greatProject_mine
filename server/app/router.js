/*
 * @Description: 
 * @Author: chenzel
 * @Date: 2021-05-13 19:15:29
 * @LastEditTime: 2021-05-13 19:27:50
 * @LastEditors: chenzel
 */
'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
}
