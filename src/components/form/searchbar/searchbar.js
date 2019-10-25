import React from "react";
import styles from "./searchbar.module.css";

const Searchbar = ({ topic, setTopic }) => {
	const [searchbarText, setSearchbarText] = React.useState("");

	const handleSearchbarChange = (event) => {
		setSearchbarText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTopic(searchbarText);
	};
	return (
		<form onSubmit={handleSubmit} className={styles["searchbar-form"]}>
			<label
				htmlFor={`topicSearchbar`}
				className={styles["searchbar-label"]}
			>{`Search for a topic:`}</label>
			<input
				type="text"
				value={searchbarText}
				name={`topicSearchbar`}
				onChange={handleSearchbarChange}
				className={styles["searchbar-input"]}
			></input>

			<button type="submit" className={styles["searchbar-submit"]}>
				Search
			</button>
		</form>
	);
};

export default Searchbar;
