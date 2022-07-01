const express = require("express");
const router = express.Router();
const { postData, getData } = require("../controller/players.js");
router.post("/post", postData);
router.get("/get", getData);

module.exports = router;
