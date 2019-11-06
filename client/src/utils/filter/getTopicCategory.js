const getTopicCategory = (topic, topicData) => {
	return topicData.find((elem) => elem.topic === topic).category;
};

export default getTopicCategory;
