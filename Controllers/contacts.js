const mongodb = require("../DB/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const result = await mongodb.getDatabase().db().collection("Contacts").find();
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts);
    });
}

const getById = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("Contacts").find({ _id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts[0]);
    });
};

const createContact = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection("Contacts").insertOne(contact);

    if (response.acknowledged) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || "Something happened while creating the contact.");
    }
};

const updateContact = async (req, res) => {
    //#swagger.tags=["Contacts"]
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection("Contacts").replaceOne({ _id: contactId }, contact);

    if (response.mnodifiedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || "Something happened while updating the contact.");
    }
};

const deleteContact = async (req,res) => {
    //#swagger.tags=["Contacts"]
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection("Contacts").deleteOne({ _id: contactId });

    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || "Something happened while deleting the contact.");
    }
}

module.exports = { getAll, getById, createContact, updateContact, deleteContact };