const express = require("express");
const router = express();
const getPeople = require("./handlers/getPeople");
const addPerson = require("./handlers/addPerson");
const addTopic = require("./handlers/addTopic");
const getTopics = require("./handlers/getTopics");

router.use(express.static("public"));

router.get("/people", getPeople);
router.get("/topics", getTopics);

router.post("/people", addPerson);
router.post("/topics", addTopic);


module.exports = router;