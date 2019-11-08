require("dotenv").config();

const assert = require("assert");
const mongo = require("mongodb").MongoClient;
const dummyPeople = require("./dummyPeople");
const dummyTopics = require("./dummyTopics");
let _db;
let _client;
let dbURL;

dbURL = process.env.MONGO_URI;

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

const populateDB = (db) => {
    db.collection("people").insertMany(dummyPeople);
    db.collection("topics").insertMany(dummyTopics);
};

const deleteDB = (db) => {
    db.collection("people").deleteMany({});
    db.collection("topics").deleteMany({});
};
const initDB = () => {
    return new Promise((resolve, reject) => {
        const connected = (err, client) => {
            if (err) {
                reject(err);
            } else {
                console.log("Initilising the database");
                _client = client;
                _db = client.db("beameryconnect");
                deleteDB(_db);
                populateDB(_db);
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
