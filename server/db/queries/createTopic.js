
const createTopic = async (db, newTopic) => {


    await db.collection("topics").insertOne(newTopic);


};

module.exports = createTopic;