
const readTopics = (db, callback) => {
    db.collection("topics").find().toArray(callback);
};

module.exports = readTopics;