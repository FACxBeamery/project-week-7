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
        topic:,
        category:

    //grab info from fields

};


    schema.validate(topicToAdd, { abortEarly: false }).then(validatedTopic => {
        const db = getDB();
        createTopic(validatedTopic, (error, result) => {
            if (error) {
                throw error;
            }

            return res.status(200).send(result);
        })




    }).catch(error => {
        res.status(400).send(error);
        res.status(400).send("Validation failed.");
    });







};

module.exports = addTopic;