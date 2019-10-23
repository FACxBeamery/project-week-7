import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

function App() {
	const [category, setCategory] = React.useState(null);
	const [topic, setTopic] = React.useState(null);
	const [person, setPerson] = React.useState(null);
	const [location, setLocation] = React.useState(null);
	return (
		<>
			<Header></Header>
			<div className={styles["main"]}>
				<Sidebar
					category={category}
					setCategory={setCategory}
					topic={topic}
					setTopic={setTopic}
					location={location}
					setLocation={setLocation}
				></Sidebar>
				{/* <MainContent>

			</MainContent> */}
			</div>
		</>
	);
}

export default App;
