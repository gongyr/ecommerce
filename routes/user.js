const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");

router.get("/signup", sayHi);
module.exports = router;
