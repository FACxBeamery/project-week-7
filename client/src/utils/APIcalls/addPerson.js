import axios from "axios";

const addPerson = async (personToAddTo, TopicToAdd) => {
    console.log("TRYING TO ADD A PER`son");
    let res = await axios.patch("/people", {
        person: personToAddTo,
        topic: TopicToAdd
    });
};

export default addPerson;
