import dummyData from "../../dummyPeople";

const getProfile = (name) => {
	return dummyData.find((obj) => obj.name === name);
};

//options.filter(opt => !opt.assigned).map(opt => someNewObject)

export default getProfile;
