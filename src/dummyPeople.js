const ObjectID = require("mongodb").ObjectID;
const initialDataPeople = [
	{
		_id: ObjectID("666f6f2d6261722d71757578"),
		name: "Lyndsey Scott",
		job: "Graduate Software Engineer",
		topics: [
			ObjectID("507f1f77bcf86cd799439011"),
			ObjectID("54759eb3c090d83494e2d804")
		]
	},
	{
		_id: ObjectID("0123456789ab0123456789ab"),
		name: "Martha Lambert",
		job: "Graduate Software Engineer",
		topics: [ObjectID("54759eb3c090d83494e2d804")]
	}
];
module.exports = initialDataPeople;
