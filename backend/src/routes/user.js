const router = require("express").Router();
const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

// Get all user
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

// Delete user
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
