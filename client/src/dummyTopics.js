const ObjectID = require("mongodb").ObjectID;
const initialDataTopics = [
    {
        _id: ObjectID("507f1f77bcf86cd799439011"),
        topic: "food",
        category: "non-work",
        people: [ObjectID("666f6f2d6261722d71757578")]
    },
    {
        _id: ObjectID("54759eb3c090d83494e2d804"),
        category: "frontend",
        topic: "micro frontends",
        people: [
            ObjectID("666f6f2d6261722d71757578"),
            ObjectID("0123456789ab0123456789ab")
        ]
    },
    {
        _id: "1",
        category: "backend",
        topic: "microservices",
        people: []
    },
    {
        _id: "2",
        category: "frontend",
        topic: "React",
        people: [
            ObjectID("666f6f2d6261722d71757578"),
            ObjectID("0123456789ab0123456789ab")
        ]
    },
    {
        _id: "3",
        category: "non-work",
        topic: "gaming",
        people: [
            ObjectID("666f6f2d6261722d71757578"),
            ObjectID("0123456789ab0123456789ab")
        ]
    },
    {
        _id: "4",
        category: "non-work",
        topic: "dogs",
        people: [
            ObjectID("666f6f2d6261722d71757578"),
            ObjectID("0123456789ab0123456789ab")
        ]
    }
];
module.exports = initialDataTopics;
