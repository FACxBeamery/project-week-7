import dummyData from "../../dummyTopics";
const ObjectID = require("mongodb").ObjectID;
const addTopic = (newTopic) => {
	return dummyData.concat({
		_id: ObjectID("407f1f77bcf86cd799439012"),
		people: [],
		...newTopic
	});
};

export default addTopic;
