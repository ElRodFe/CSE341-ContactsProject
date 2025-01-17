const express = require("express");
const router = express.Router();
const contactsRoute = require("./contacts")

    // GET requests
router.use("/", require("./swagger"));
router.get("/", (req, res) => {
    //#swagger.tags=["Hello World!"]
    res.send("Hello World!")
});
router.use("/contacts", contactsRoute);

module.exports = router;