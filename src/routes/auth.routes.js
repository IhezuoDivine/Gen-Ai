const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = Router();

app.use(XPathExpression.json());

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

module.exports = authRouter;
