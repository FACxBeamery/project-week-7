const express = require("express");

const getPeople = require("./handlers/getPeople");
const addTopicToPerson = require("./handlers/addTopictoPerson");
const addTopic = require("./handlers/addTopic");
const getTopics = require("./handlers/getTopics");

const router = express();

router.use(express.static("public"));

router.get("/people", getPeople);
router.get("/topics", getTopics);

router.patch("/people", addTopicToPerson);
router.post("/topics", addTopic);

module.exports = router;
