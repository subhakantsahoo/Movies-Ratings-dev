/**
 * @openapi
 * tags:
 *   - name: Middleware
 *     description: Token and middleware verification endpoints
 */

const routes=require('express').Router();
//const { post, get } = require('.');
 const Token=require('../services/middleware');
let TokenService=new Token();

/**
 * @openapi
 * /api/dc/get:
 *   get:
 *     tags: [Middleware]
 *     summary: Verify middleware token endpoint
 *     responses:
 *       200:
 *         description: Token middleware response
 */
routes.get("/get",TokenService.get);

module.exports=routes;
  