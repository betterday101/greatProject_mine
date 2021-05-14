/*
 * @Description: 
 * @Author: chenzel
 * @Date: 2021-05-13 19:15:29
 * @LastEditTime: 2021-05-14 11:58:09
 * @LastEditors: chenzel
 */
'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
