/*
 * @Description: 
 * @Author: chenzel
 * @Date: 2021-05-13 19:15:29
 * @LastEditTime: 2021-05-14 14:50:09
 * @LastEditors: chenzel
 */
const svgCaptcha = require("svg-captcha")
const Controller = require('egg').Controller

class UtilController extends Controller {
  async captcha() {
    const { ctx } = this
    const captcha=new svgCaptcha.create({
        size: 4 ,
        fontSize:50,
        noise: 3, 
        width:100,
        height:40
    })
    console.log("captcha=",captcha.text)
    ctx.session.captcha=captcha.text
    ctx.response.type="image/svg+xml"
    ctx.body = captcha.data
  }
}

module.exports = UtilController
