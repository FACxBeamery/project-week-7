import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import MainContent from "./components/mainContent/mainContent";

import getCategories from "./utils/get/getCategories";
import getLocations from "./utils/get/getLocations";

import ProfileModal from "./components/profileModal/profileModal";
import getProfile from "./utils/get/getProfile";


const App = () => {
	const [view, setView] = React.useState("category");
	const [category, setCategory] = React.useState(null);
	const [topic, setTopic] = React.useState(null);
	const [person, setPerson] = React.useState(null);
	const [location, setLocation] = React.useState(null);
	const [peopleData, setPeopleData] = React.useState(null);
	const [topicData, setTopicData] = React.useState(null);
	const [categoriesList, setCategoriesList] = React.useState(getCategories());
	const [locationsList, setLocationsList] = React.useState(getLocations());
	return (
		<>
			<Header setPerson={setPerson}></Header>
			{person ? (
				<ProfileModal profile={getProfile(person)}></ProfileModal>
			) : null}
			<div className={styles["main"]}>
				<Form
					category={category}
					setCategory={setCategory}
					topic={topic}
					setTopic={setTopic}
					location={location}
					setLocation={setLocation}
					categoriesList={categoriesList}
				></Form>
				<MainContent
					category={category}
					setCategory={setCategory}
					topic={topic}
					setTopic={setTopic}
					location={location}
					setLocation={setLocation}
					person={person}
					setPerson={setPerson}
					view={view}
					setView={setView}
					categoriesList={categoriesList}
					setTopicData={setTopicData}
					setPeopleData={setPeopleData}
					peopleData={peopleData}
					topicData={topicData}
					locationsList={locationsList}
				></MainContent>
			</div>
		</>
	);
};

export default App;
