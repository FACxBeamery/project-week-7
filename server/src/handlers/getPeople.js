const readPeople = require("../../db/queries/readPeople");


const getDB = require("../../db/dbConnect").getDB;

const getPeople = (req, res) => {
    const db = getDB();

    readPeople(db, (error, result) => {
        if (error) {
            throw error;
        }

        return res.status(200).send(result);
    });
};


module.exports = getPeople;