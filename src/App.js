import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import MainContent from "./components/mainContent/mainContent";

import getCategories from "./utils/get/getCategories";
import getLocations from "./utils/get/getLocations";

import getProfile from "./utils/get/getProfile";

const App = () => {
	const [view, setView] = React.useState("category");
	const [topic, setTopic] = React.useState(null);
	const [person, setPerson] = React.useState(null);
	const [location, setLocation] = React.useState("All");
	const [categoriesList] = React.useState(getCategories());
	const [locationsList] = React.useState(getLocations());
	const [peopleData, setPeopleData] = React.useState(null);
	const [category, setCategory] = React.useState(null);
	const [topicData, setTopicData] = React.useState(null);

	return (
		<>
			<Header
				person={person}
				setPerson={setPerson}
				setView={setView}
			></Header>

			<div className={styles["main"]}>
				<Form
					view={view}
					setView={setView}
					topic={topic}
					setTopic={setTopic}
					location={location}
					setLocation={setLocation}
					peopleData={peopleData}
					setPeopleData={setPeopleData}
					category={category}
					setCategory={setCategory}
					topicData={topicData}
					setTopicData={setTopicData}
				></Form>
				<MainContent
					view={view}
					setView={setView}
					topic={topic}
					setTopic={setTopic}
					location={location}
					categoriesList={categoriesList}
					locationsList={locationsList}
					peopleData={peopleData}
					setPeopleData={setPeopleData}
					category={category}
					setCategory={setCategory}
					topicData={topicData}
					setTopicData={setTopicData}
				></MainContent>
			</div>
		</>
	);
};

export default App;
