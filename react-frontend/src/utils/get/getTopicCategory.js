import dummyData from "../../dummyTopics";

const getTopicCategory = (topic) => {
	return dummyData.find((elem) => elem.topic === topic).category;
};

export default getTopicCategory;
