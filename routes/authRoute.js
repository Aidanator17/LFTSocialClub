const express = require("express");
const router = express.Router();
const { forwardAuthenticated } = require("../middleware/checkAuth");

router.get("/login", forwardAuthenticated, async (req, res) => {
    // console.log(await userFunctions.returnUsers())
    res.render("auth/login")
})

module.exports = router