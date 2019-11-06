const getProfile = (name, peopleData, topicData) => {
    //change this to not case sensitive
    const personObj = peopleData.find((obj) => obj.name === name);
    const topicsArray = personObj.topics.map(
        (topicID) => topicData.find((topic) => topic._id === topicID).topic
    );
    return [personObj, topicsArray];
};

export default getProfile;
