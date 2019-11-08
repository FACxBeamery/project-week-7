const Joi = require("joi");
const updateTopicsForPerson = require("../../db/queries/updateTopicsForPerson");
const getDB = require("../../db/dbConnect").getDB;

const addTopicToPerson = (req, res) => {
    console.log("req body", req.body);
    const topicToAddToPerson = req.body.topic;

    const personToUpdate = req.body.name;

    console.log("person to update", personToUpdate);

    try {
        const db = getDB();
        updateTopicsForPerson(db, topicToAddToPerson, personToUpdate);
        res.status(201).send("added successfully!");
    } catch (err) {
        res.status(404).send(err);
    }
};

module.exports = addTopicToPerson;
