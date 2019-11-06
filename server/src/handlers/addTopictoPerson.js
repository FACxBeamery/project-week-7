const updateTopicsForPerson = require("../../db/queries/updateTopicsForPerson");
const getDB = require("../../db/dbConnect").getDB;


const addTopicToPerson = (req, res) => {
    const db = getDB();
    const topicToAdd = {

    };
    updateTopicsForPerson(db);
};



