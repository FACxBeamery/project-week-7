const readTopics = require("../../db/queries/readTopics");

const getDB = require("../../db/dbConnect").getDB;

const getTopics = async (req, res) => {
    try {
        const db = getDB();
        const topicsCollection = await readTopics(db);
        res.send(topicsCollection);
        res.status(200);
    } catch (err) {
        res.status(404).send(err);
    }
};

module.exports = getTopics;
