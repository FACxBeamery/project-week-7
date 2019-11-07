import dummyPeople from "../../dummyPeople";
import axios from "axios";

const getPeopleData = async () => {
    let res = await axios.get("/people");
    let peopleData = res.data;
    return peopleData;
};

export default getPeopleData;
