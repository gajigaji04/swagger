const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /myrouter:
 *   get:
 *     summary: Get home page from router
 *     description: Returns the home page from the router
 *     responses:
 *       200:
 *         description: Home page content
 */
router.get("/", (req, res) => {
  res.send("Hello from the router!");
});

/**
 * @swagger
 * /myrouter/about:
 *   get:
 *     summary: Get about page from router
 *     description: Returns the about page from the router
 *     responses:
 *       200:
 *         description: About page content
 */
router.get("/about", (req, res) => {
  res.send("About Page from the router");
});

module.exports = router;
