const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//REGISTER
router.post("/register", authController.registerUser);
//LOGIN
router.post("/login", authController.loginUser);
//LOGOUT
router.post("/logout",middlewareController.verifyToken, authController.logoutUser);
//REFRESH
router.post("/refresh", authController.requestRefreshToken);

module.exports = router;
