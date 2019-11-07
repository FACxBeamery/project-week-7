const readTopics = async (db) => {
    const topicsCollection = await db
        .collection("topics")
        .find()
        .toArray();
    return topicsCollection;
};

module.exports = readTopics;
