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
	const [topic, setTopic] = React.useState(null);
	const [person, setPerson] = React.useState(null);
	const [location, setLocation] = React.useState(null);
	const [categoriesList] = React.useState(getCategories());
	const [locationsList] = React.useState(getLocations());
	return (
		<>
			<Header setPerson={setPerson}></Header>
			{person ? (
				<ProfileModal
					setPerson={setPerson}
					profile={getProfile(person)}
				></ProfileModal>
			) : null}
			<div className={styles["main"]}>
				<Form
					topic={topic}
					setTopic={setTopic}
					location={location}
					setLocation={setLocation}
				></Form>
				<MainContent
					topic={topic}
					setTopic={setTopic}
					location={location}
					categoriesList={categoriesList}
					locationsList={locationsList}
				></MainContent>
			</div>
		</>
	);
};

export default App;
