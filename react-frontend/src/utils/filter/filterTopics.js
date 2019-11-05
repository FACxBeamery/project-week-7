import dummyData from "../../dummyTopics";

const filterTopics = (category) => {
	return dummyData.filter((topic) => {
		return topic.category === category;
	});
};

export default filterTopics;
