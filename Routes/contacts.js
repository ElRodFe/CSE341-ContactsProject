const express = require("express");
const router = express.Router();
const contactsController = require("../Controllers/contacts");

router.get("/", contactsController.getAll); //Getting all contacts from database
router.get("/:id", contactsController.getById); //Getting ons eingle contact from database

module.exports = router;