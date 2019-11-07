import dummyTopics from "../../dummyTopics";
import axios from "axios";
const getTopicData = async () => {
    console.log("getting topics");
    let res = await axios.get("/topics");
    let topicData = res.data;
    console.log("topicData", topicData);
    return topicData;
};

export default getTopicData;
