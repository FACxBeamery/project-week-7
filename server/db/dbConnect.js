
require("dotenv").config();

const assert = require("assert");
const mongo = require("mongodb").MongoClient;

let _db;
let _client;
let dbURL;


if (process.env.NODE_ENV === "test") {
    dbURL = process.env.DATABASE_URL_TEST;
} else {
    dbURL = process.env.DATABASE_URL;
}


const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

const initDB = () => {
    return new Promise((resolve, reject) => {
        const connected = (err, client) => {
            if (err) {
                reject(err);
            }
            else {
                console.log("Initilising the database");
                _client = client;
                _db = client.db("beameryconnect");
                resolve(_db);
            }
        };

        if (_db) {
            console.warn("trying again to init the database :)");
            resolve(_db);
        }

        mongo.connect(dbURL, dbConfig, connected);

    });


};

const getDB = () => {
    assert.ok(_db, "Db has not been initialized. Please call initDB first.");
    return _db;
};

const closeDB = () => {
    _db = null;

    return _client.close();
};

module.exports = { getDB, initDB, closeDB };