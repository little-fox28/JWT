const User = require("../models/User");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findById(req.params.id);
      res.status(200).json("Delete Successfully!!!");
    } catch {
      return res.status(500).json("You're not allow to delete other");
    }
  },
};

module.exports = userController;
