const dummyPeople = require("./dummyPeople");
const dummyTopics = require("./dummyTopics");

const deleteAllTopics = (db) => {
    if (db.collection("topics")) {
        db.collection("topics").drop();
    }
};

const deleteAllPeople = (db) => {
    if (db.collection("people")) {
        db.collection("people").drop();
    }
};

const buildTestPeople = (db) => db.collection("people").insertMany(dummyPeople);
const buildTestTopics = (db) => db.collection("topics").insertMany(dummyTopics);

module.exports = {
    deleteAllPeople,
    deleteAllTopics,
    buildTestTopics,
    buildTestPeople
};
