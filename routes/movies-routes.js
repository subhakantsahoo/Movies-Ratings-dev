/**
 * @openapi
 * tags:
 *   - name: Movies
 *     description: Movie CRUD operations
 */

const routes = require("express").Router();
//const { post, get } = require('.');
const Movies = require("../services/movies-service");
let MoviesService = new Movies();

/**
 * @openapi
 * /api/movie/create:
 *   post:
 *     tags: [Movies]
 *     summary: Create a movie entry
 *     responses:
 *       200:
 *         description: Movie created successfully
 */
routes.post("/create", MoviesService.create);

/**
 * @openapi
 * /api/movie/get:
 *   get:
 *     tags: [Movies]
 *     summary: List all movies
 *     responses:
 *       200:
 *         description: Movie list
 */
routes.get("/get", MoviesService.get);

/**
 * @openapi
 * /api/movie/{id}:
 *   patch:
 *     tags: [Movies]
 *     summary: Update a movie record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie updated successfully
 */
routes.patch("/:id", MoviesService.update);

/**
 * @openapi
 * /api/movie/{id}:
 *   delete:
 *     tags: [Movies]
 *     summary: Delete a movie record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 */
routes.delete("/:id", MoviesService.delete);

/**
 * @openapi
 * /api/movie/one/{id}:
 *   get:
 *     tags: [Movies]
 *     summary: Fetch a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 */
routes.get("/one/:id", MoviesService.getbyid);

/**
 * @openapi
 * /api/movie/search/{title}:
 *   get:
 *     tags: [Movies]
 *     summary: Search movies by title
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
routes.get("/search/:title", MoviesService.search);
module.exports = routes;
