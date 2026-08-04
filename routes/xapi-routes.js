/**
 * @openapi
 * tags:
 *   - name: XAPI
 *     description: System diagnostic and telemetry endpoints
 */

const routes = require("express").Router();
const Xapi = require("../services/xapi-service");
let xapi = new Xapi();

/**
 * @openapi
 * /api/xapi/create:
 *   post:
 *     tags: [XAPI]
 *     summary: Save system telemetry snapshot
 *     responses:
 *       200:
 *         description: Telemetry saved successfully
 */
routes.post("/create", (req, res) => {
  xapi.create(req, res);
});

/**
 * @openapi
 * /api/xapi/get:
 *   get:
 *     tags: [XAPI]
 *     summary: Get saved telemetry records
 *     responses:
 *       200:
 *         description: Telemetry records retrieved successfully
 */
routes.get("/get", (req, res) => {
  xapi.get(req, res);
});
module.exports = routes;
