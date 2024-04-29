const express = require("express");
const {
  handleGetALLUsers,
  handleDeleteUserById,
  handleUpdateUserById,
  handleAddUser,
  hadleGetUserById,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleGetALLUsers).post(handleAddUser);

router
  .route("/:id")
  .get(hadleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
