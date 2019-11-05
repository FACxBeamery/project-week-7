import dummyData from "../../dummyPeople";

const getProfile = (name, peopleData, topicData) => {
	//change this to not case sensitive
	const personObj = peopleData.find((obj) => obj.name === name);
	const topicsArray = personObj.topics.map(
		(topicID) => topicData.find((topic) => topic._id === topicID).topic
	);
	return [personObj, topicsArray];
};

//options.filter(opt => !opt.assigned).map(opt => someNewObject)

export default getProfile;
