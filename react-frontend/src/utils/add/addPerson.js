import dummyData from "../../dummyTopics";
const ObjectID = require("mongodb").ObjectID;
const addPerson = (newPerson, newTopic) => {
	return dummyData.concat({
		_id: ObjectID("407f1f77bcf86cd799439012"),
		people: [],
		...newTopic
	});
};

export default addPerson;
