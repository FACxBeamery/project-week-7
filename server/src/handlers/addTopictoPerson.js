const updateTopicsForPerson = require("../../db/queries/updateTopicsForPerson");
const getDB = require("../../db/dbConnect").getDB;
const Joi = require("joi");

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
        people: Joi.array().items()

    });
    const topicToAdd = {
        //grab info from fields

    };
    const personToUpdate = {

        // grab info from fields?

    };

    schema.validate(topicToAdd, { abortEarly: false }).then(validatedTopic => {
        const db = getDB();
        updateTopicsForPerson(db, validatedTopic, personToUpdate, (error, result) => {
            if (error) {
                throw error;
            }

            return res.status(200).send(result);
        }


        );
    }).catch(error => {
        res.status(400).send(error);
        res.status(400).send("Validation failed.");
    });




};



