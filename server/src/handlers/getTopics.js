const readTopics = require("../../db/queries/readTopics");

const getDB = require("../../db/dbConnect").getDB;




const getTopics = (req, res) => {
    const db = getDB;

    readTopics(db, (error, result) => {
        if (error) {
            throw error;
        }

        return res.status(200).send(result);
    });
};


module.exports = getTopics;