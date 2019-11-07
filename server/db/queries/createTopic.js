
const createTopic = (newTopic, db) => {


    db.collection("topics").insertOne(newTopic);

};

module.exports = createTopic;