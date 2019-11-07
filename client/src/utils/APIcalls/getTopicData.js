import dummyTopics from "../../dummyTopics";
import axios from "axios";
const getTopicData = async () => {

    let res = await axios.get("/topics");
    let topicData = res.data;


    return topicData;
};

export default getTopicData;
