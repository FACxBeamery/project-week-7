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
	const [errors, setErrors] = React.useState(undefined);

	const handleSearchbarChange = (event) => {
		event.persist();
		setSearchbarText(event.target.value);
		console.log("searchbar text", event.target.value);
		if (event.target.value.length === 0) {
			setErrors(true);
		} else {
			setErrors(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (searchbarText) {
			setTopic(searchbarText);
			setSearchbarText("");
		}
	};

	// React.useEffect(() => {
	// 	console.log("current errors");
	// 	console.log(errors);
	// 	console.log(searchbarText.length);
	// 	if (searchbarText.length > 0) {
	// 		setErrors(false);
	// 	} else {
	// 		setErrors(true);
	// 	}
	// }, [searchbarText, errors, setErrors]);

	React.useEffect(() => {
		if (!errors && topic) {
			setPeopleData(getPeople(topic));
			setCategory(getTopicCategory(topic));
			setView("people");
		}
	}, [errors, topic, setPeopleData, setCategory, setView]);

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
				className={`${styles["searchbar-input"]} ${
					errors === true ? styles["searchbar-error"] : null
				}`}
			></input>

			<button
				type="submit"
				className={styles["searchbar-submit"]}
				disabled={errors === false ? false : true}
			>
				Search Topics
			</button>
		</form>
	);
};

export default Searchbar;
