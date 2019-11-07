
const readTopics = async (db) => {

    await db.collection("topics").find().toArray();


};

module.exports = readTopics;