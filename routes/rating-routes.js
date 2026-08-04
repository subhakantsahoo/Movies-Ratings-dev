/**
 * @openapi
 * tags:
 *   - name: Ratings
 *     description: Rating management endpoints
 */

const routes=require('express').Router();
//const { post, get } = require('.');
const Rating=require('../services/rating-service');
let RatingsUser=new Rating();

/**
 * @openapi
 * /api/rating/create:
 *   post:
 *     tags: [Ratings]
 *     summary: Create a rating
 *     responses:
 *       200:
 *         description: Rating created successfully
 */
routes.post("/create",RatingsUser.create);

/**
 * @openapi
 * /api/rating/get:
 *   get:
 *     tags: [Ratings]
 *     summary: Fetch all ratings
 *     responses:
 *       200:
 *         description: Ratings list
 */
routes.get("/get",RatingsUser.get);

/**
 * @openapi
 * /api/rating/{id}:
 *   patch:
 *     tags: [Ratings]
 *     summary: Update a rating
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rating updated successfully
 */
routes.patch("/:id",RatingsUser.update);

/**
 * @openapi
 * /api/rating/{id}:
 *   delete:
 *     tags: [Ratings]
 *     summary: Delete a rating
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rating deleted successfully
 */
routes.delete("/:id",RatingsUser.delete);

/**
 * @openapi
 * /api/rating/one/{id}:
 *   get:
 *     tags: [Ratings]
 *     summary: Fetch ratings for a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ratings retrieved successfully
 */
routes.get("/one/:id",RatingsUser.getbyid);

module.exports=routes;
