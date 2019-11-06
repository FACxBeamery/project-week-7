const assert = require("assert");
const ObjectID = require("mongodb").ObjectID;
const filterPeople = (topic, location, topicData, peopleData) => {
    const peopleInterestedIDArray = topicData.find(
        (currentTopic) => currentTopic.topic === topic
    ).people;
    console.log("id array", peopleInterestedIDArray);
    const peopleObjectsArray = peopleInterestedIDArray.map((id) =>
        peopleData.find((person) => {
            console.log("person id =", person._id);
            console.log("id to match = ", id);
            console.log("id matches", person._id.equals(id));
            return person._id.equals(id);
            // return person._id === id;
        })
    );
    console.log("peopleobjectsarray", peopleObjectsArray);
    return peopleObjectsArray;
};

export default filterPeople;
