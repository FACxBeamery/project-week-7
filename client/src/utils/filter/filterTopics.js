const filterTopics = (category, topicData) => {
	return topicData.filter((topic) => {
		return topic.category === category;
	});
};

export default filterTopics;
