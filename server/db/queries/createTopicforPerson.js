

const createTopicforPerson = (db, callback, newTopic, name) => {
    const nameExists = db.collection("people").find({ "name": name });
    if (nameExists) {
        db.collection("people").updateOne({ "name": name }, { $push: { "topic": newTopic } }, callback);

    }
    else {
        console.log("oops that person doesn't exist :(");
    }

};




module.exports = createTopicforPerson;

