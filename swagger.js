const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movies Rating API",
      version: "1.0.0",
      description: "REST API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Update this path if your routes are elsewhere
};

module.exports = swaggerJsdoc(options);