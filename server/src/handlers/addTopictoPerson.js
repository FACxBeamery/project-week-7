const Joi = require("joi");
const updateTopicsForPerson = require("../../db/queries/updateTopicsForPerson");
const getDB = require("../../db/dbConnect").getDB;


const addTopicToPerson = (req, res) => {

    const topicToAddToPerson = req.fields.topic;


    const personToUpdate = req.fields.person;


    try {
        const db = getDB();
        updateTopicsForPerson(db, topicToAddToPerson, personToUpdate);
        res.status(201);
    }
    catch (err) {
        res.status(400).send(err);
    }





};

module.exports = addTopicToPerson;

