/*
 * @Description:
 * @Author:chenzel
 * @Date:2021-05-13 19:15:29
 * @LastEditTime:2021-05-13 19:32:56
 * @LastEditors:chenzel
 */
'use strict'

const { app, assert } = require('egg-mock/bootstrap')

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json')
    assert(app.config.keys.startsWith(pkg.name))

    // const ctx = app.mockContext({})
    // yield ctx.service.xx()
  })

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200)
  })
})
