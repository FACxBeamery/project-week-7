import React from "react";
import styles from "./searchbar.module.css";

const Searchbar = ({ topic, setTopic }) => {
	const [searchbarText, setSearchbarText] = React.useState(null);

	const handleSearchbarChange = (event) => {
		setSearchbarText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTopic(searchbarText);
	};
	return (
		<form onSubmit={handleSubmit} className={styles["searchbar-form"]}>
			<label htmlFor={`topicSearchbar`}>{`Search for a topic:`}</label>
			<input
				type="text"
				value={searchbarText}
				name={`topicSearchbar`}
				onChange={handleSearchbarChange}
			></input>

			<button type="submit">Search</button>
		</form>
	);
};

export default Searchbar;
