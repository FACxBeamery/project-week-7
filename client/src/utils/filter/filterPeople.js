const filterPeople = (topic, location, topicData, peopleData) => {
    const peopleInterestedIDArray = topicData.find(
        (currentTopic) => currentTopic.topic === topic
    ).people;
    console.log("interested ids array", peopleInterestedIDArray);
    const peopleObjectsArray = peopleInterestedIDArray.map((id) =>
        peopleData.find((person) => {
            console.log(person._id);
            console.log(id);
            return person._id === id;
        })
    );
    return peopleObjectsArray;
};

export default filterPeople;
