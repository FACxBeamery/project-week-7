import dummyData from "../../dummyTopics";

const getTopics = (category) => {
	return dummyData.filter((topic) => {
		return topic.category === category;
	});
};

export default getTopics;
