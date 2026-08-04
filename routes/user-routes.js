/**
 * @openapi
 * tags:
 *   - name: User Management
 *     description: User CRUD and login endpoints
 */

const routes=require('express').Router();
//const { post, get } = require('.');
const User=require('../services/user-service');
let userservice=new User();

/**
 * @openapi
 * /api/user/create:
 *   post:
 *     tags: [User Management]
 *     summary: Create a user
 *     responses:
 *       200:
 *         description: User created
 */
routes.post("/create",userservice.create);

/**
 * @openapi
 * /api/user/get:
 *   get:
 *     tags: [User Management]
 *     summary: List all users
 *     responses:
 *       200:
 *         description: User list
 */
routes.get("/get",userservice.get);

/**
 * @openapi
 * /api/user/{id}:
 *   patch:
 *     tags: [User Management]
 *     summary: Update a user record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated
 */
routes.patch("/:id",userservice.update);

/**
 * @openapi
 * /api/user/{id}:
 *   delete:
 *     tags: [User Management]
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */
routes.delete("/:id",userservice.delete);

/**
 * @openapi
 * /api/user/one/{id}:
 *   get:
 *     tags: [User Management]
 *     summary: Get one user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved
 */
routes.get("/one/:id",userservice.getbyid);

/**
 * @openapi
 * /api/user/login:
 *   post:
 *     tags: [User Management]
 *     summary: Check user login credentials
 *     responses:
 *       200:
 *         description: Login check result
 */
routes.post("/login",userservice.checkLogin);
module.exports=routes;
