const express = require("express");
const router = express.Router();
const contactsController = require("../Controllers/contacts");

// GET REQUESTS
router.get("/", contactsController.getAll); //Get all contacts
router.get("/:id", contactsController.getById); //Get a single contacts by id

// POST REQUESTS
router.post("/", contactsController.createContact); //Create a new contact

//PUT REQUESTS
router.put("/:id", contactsController.updateContact); //Update a contact

//DELETE REQUESTS
router.delete("/:id", contactsController.deleteContact); //Delete a contact

module.exports = router;