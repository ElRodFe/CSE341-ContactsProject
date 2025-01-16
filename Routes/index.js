const express = require("express");
const router = express.Router();
const contactsRoute = require("./contacts")

    // GET requests
router.get("/", (req, res) => {
    res.send("Hello World!")
});
router.use("/contacts", contactsRoute);

module.exports = router;