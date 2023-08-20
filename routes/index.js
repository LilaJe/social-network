const router = require("express").Router();
const { User, Thought } = require("../../models");

router.use("/user", userRoutes);
router.use("/api", apiRoutes);

module.exports = router;
