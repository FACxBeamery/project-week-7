const Joi = require("joi");
const updateTopicsForPerson = require("../../db/queries/updateTopicsForPerson");
const getDB = require("../../db/dbConnect").getDB;


const addTopicToPerson = (req, res) => {

    const schema = Joi.object().keys({
        topic: Joi.string()
            .alphanum()
            .min(3)
            .max(100)
            .required(),

        category: Joi.string()
            .min(3)
            .max(100),
        // people: Joi.array().items()

    });
    const topicToAddToPerson = {
        topic:,
        category:


        //grab info from fields

    };
    const personToUpdate = {
        name:


        // grab info from fields?

    };

    schema.validate(topicToAddToPerson, { abortEarly: false }).then(validatedTopic => {
        try {
            const db = getDB();
            updateTopicsForPerson(db, validatedTopic, personToUpdate);
            res.status(201);
        }
        catch {
            res.status(400).send(err);
        }
    }).catch(error => {
        res.status(400).send(error);
        res.status(400).send("Validation failed.");
    });




};

module.exports = addTopicToPerson;

