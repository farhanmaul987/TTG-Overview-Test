const express = require("express");
const c_user = require("../controllers/c_user");

const router = express.Router();

router.post("/create", c_user.register);

router.get("/view", c_user.view);

router.get("/view/:id", c_user.viewID);

router.delete("/delete/:id", c_user.remove);

module.exports = router;
