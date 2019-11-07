const readTopics = require("../../db/queries/readTopics");

const getDB = require("../../db/dbConnect").getDB;



const getTopics = (req, res) => {
    try {
        const db = getDB;
        readTopics(db);
        res.status(200);
    }

    catch (err) {
        res.status(404).send(err);

    }
};


module.exports = getTopics;