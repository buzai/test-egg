'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('ctx.body --- ', ctx.body);
    console.log('ctx.request.body --- ', ctx.request.body);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
