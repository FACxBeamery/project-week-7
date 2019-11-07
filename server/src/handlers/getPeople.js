const readPeople = require("../../db/queries/readPeople");


const getDB = require("../../db/dbConnect").getDB;

const getPeople = (req, res) => {
    try {
        const db = getDB();
        readPeople(db);
        res.status(200);
    }


    catch (err) {
        res.status(404).send(err);
    }
};



module.exports = getPeople;