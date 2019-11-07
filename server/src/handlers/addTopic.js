const Joi = require("joi");
const getDB = require("../../db/dbConnect").getDB;
const createTopic = require("../../db/queries/createTopic");


const addTopic = (req, res) => {
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
    const topicToAdd = {
        topic: req.fields.topic,
        category: req.fields.category,
        people: []
        //grab info from fields

    };


    schema.validate(topicToAdd, { abortEarly: false }).then(validatedTopic => {
        try { //try/catch for query fail
            const db = getDB();
            createTopic(db, validatedTopic);
            res.status(201);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }) // catch for validation fail
        .catch(error => {
            res.status(400).send(error);
            res.status(400).send("Validation failed.");
        });







};

module.exports = addTopic;