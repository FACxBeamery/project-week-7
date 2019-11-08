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
        people: Joi.array().items()
    });
    const topicToAdd = {
        topic: req.body.topic,
        category: req.body.category,
        people: []
        //grab info from fields
    };

    // schema
    //     .validate(topicToAdd, { abortEarly: false })
    //     .then((validatedTopic) => {
    try {
        console.log("hi yes");
        //try/catch for query fail
        const db = getDB();
        createTopic(db, topicToAdd);
        res.status(201).send("added successfully");
    } catch (err) {
        console.log("errror number 1 ADSDKSAJS");
        res.status(400).send(err);
    }
};
// ) // catch for validation fail
//         .catch(() => {
//             console.log("error number 2 !JOSDIJAO");
//             res.status(400).send("Validation failed.");
//         });
// };

module.exports = addTopic;
