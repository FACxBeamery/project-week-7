
const createTopic = (newTopicName, category, db) => {
    const newTopic = {
        "topic": newTopicName,
        "category": category

    };

    db.collection("topics").insertOne(newTopic);

};

module.exports = createTopic;