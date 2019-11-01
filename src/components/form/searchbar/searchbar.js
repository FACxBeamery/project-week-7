import React from "react";
import styles from "./searchbar.module.css";
import getPeople from "../../../utils/get/getPeople";
import getTopics from "../../../utils/get/getTopics";
import getTopicCategory from "../../../utils/get/getTopicCategory";

const Searchbar = ({
	view,
	setView,
	topic,
	setTopic,
	peopleData,
	setPeopleData,
	category,
	setCategory,
	topicData,
	setTopicData
}) => {
	const [searchbarText, setSearchbarText] = React.useState("");

	const handleSearchbarChange = (event) => {
		event.persist();
		setSearchbarText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTopic(searchbarText);
		setSearchbarText("");
	};
	React.useEffect(() => {
		console.log(topic);
		if (topic) {
			setPeopleData(getPeople(topic));
			setCategory(getTopicCategory(topic));
			setView("people");
		}
	}, [topic, setPeopleData, setCategory, setView]);

	React.useEffect(() => {
		if (category) {
			setTopicData(getTopics(category));
		}
	}, [category, setTopicData]);
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
				id="topicSearchbar"
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
