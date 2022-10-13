const express = require("express");
const router = express.Router();
const { ensureAuthenticated, ensureAdmin } = require("../middleware/checkAuth");

router.get("/", async (req, res) => {
    res.render("index", { currentUser: req.user })
})

module.exports = router