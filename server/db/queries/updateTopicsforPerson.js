//
const updateTopicsForPerson = async (db, topic, name) => {
    const person = await db.collection("people").find({ name: name });
    console.log("ADDING A TOPIC YEEEE");
    if (person) {
        const personIdToAdd = person._id;
        console.log("PERSON EXISTS");
        const topicId = db.collection("topics").find({ topic: topic })._id;

        await db
            .collection("people")
            .updateOne({ name: name }, { $push: { topics: topicId } });
        await db
            .collection("topics")
            .updateOne({ topic: topic }, { $push: { people: personIdToAdd } });
    }
};

module.exports = updateTopicsForPerson;
