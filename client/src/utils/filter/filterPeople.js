const filterPeople = (topic, location, topicData, peopleData) => {
    const peopleInterestedIDArray = topicData.find(
        (currentTopic) => currentTopic.topic === topic
    ).people;
    const peopleObjectsArray = peopleInterestedIDArray.map((id) =>
        peopleData.find((person) => {
            return person._id.equals(id);
        })
    );
    return peopleObjectsArray;
};

export default filterPeople;
