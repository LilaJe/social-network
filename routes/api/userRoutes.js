const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require("../../controllers/userCon");

// /api/users

router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);
router.route("/:userId/friends/").post(addFriend).delete(removeFriend);

module.exports = router;
