//
const updateTopicsForPerson = async (db, topic, name) => {
    const person = await db.collection("people").findOne({ name: name });
    const topicz = await db.collection("topics").findOne({ topic: topic });
    console.log("topic", topic);
    if (person) {
        console.log("person", person);
        const personIdToAdd = person._id;
        console.log(personIdToAdd);
        const topicsDb = await db
            .collection("topics")
            .find()
            .toArray();
        console.log("topicsDB", topicsDb);

        const topicId = topicz._id;
        console.log(topicId);
        await db
            .collection("people")
            .updateOne({ name: name }, { $push: { topics: topicId } });
        await db
            .collection("topics")
            .updateOne({ topic: topic }, { $push: { people: personIdToAdd } });
        const people = await db
            .collection("people")
            .find()
            .toArray();
        console.log("people collection", people);
    }
};

module.exports = updateTopicsForPerson;
