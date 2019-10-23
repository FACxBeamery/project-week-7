import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import MainContent from "./components/mainContent/mainContent";

const App = () => {
	const [category, setCategory] = React.useState(null);
	const [topic, setTopic] = React.useState(null);
	const [person, setPerson] = React.useState(null);
	const [location, setLocation] = React.useState(null);

	return (
		<>
			<Header></Header>
			<div className={styles["main"]}>
				<Form
					category={category}
					setCategory={setCategory}
					topic={topic}
					setTopic={setTopic}
					location={location}
					setLocation={setLocation}
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
				></MainContent>
			</div>
		</>
	);
};

export default App;
