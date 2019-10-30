import dummyData from "../../dummyTopics";

const getTopics = (category) => {
	console.log(category);
	return dummyData.filter((topic) => {
		console.log(topic);
		console.log(topic.category);
		return topic.category === category;
	});
};

export default getTopics;
