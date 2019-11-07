import axios from "axios";

const addTopic = async (newTopic) => {
	let res = await axios.post("/topics", {
		newTopic
	})
	// check if successful
}
export default addTopic;
