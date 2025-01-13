const express = require("express");
const router = express.Router();
const contactsController = require("../Controllers/contacts");

    // GET requests
router.get("/", (req, res) => {
    res.send("Hello World!")
});
router.get("/contacts", contactsController.getAll); //Getting all contacts from database
router.get("/contacts/:id", contactsController.getById); //Getting ons eingle contact from database

module.exports = router;