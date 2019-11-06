const getProfile = (name, peopleData, topicData) => {
    //change this to not case sensitive
    const personObj = peopleData.find(
        (obj) => obj.name.toUpperCase() === name.toUpperCase()
    );

    if (personObj) {
        const topicsArray = personObj["topics"].map(
            (id) => topicData.find((topic) => topic._id.equals(id)).topic
        );

        return [personObj, topicsArray];
    }

    return null;
};

export default getProfile;
