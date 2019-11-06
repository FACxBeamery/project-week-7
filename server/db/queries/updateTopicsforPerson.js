
// 
const updateTopicsForPerson = (db, topic, name, callback) => {

    const person = db.collection("people").find({ "name": name });

    if (person) {
        const personIdToAdd = person._id;

        const topicId = db.collection("topics").find({ "topic": topic })._id;

        db.collection("people").updateOne({ "name": name }, { $push: { "topics": topicId } }, callback);
        db.collection("topics").updateOne({ "topic": topic }, { $push: { "people": personIdToAdd } }, callback);

    }


};




module.exports = updateTopicsForPerson;
