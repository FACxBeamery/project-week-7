import axios from "axios";

const addPerson = async (newObj) => {
    console.log("TRYING TO ADD A PER`son");
    let res = await axios.patch("/people", newObj);
};

export default addPerson;
