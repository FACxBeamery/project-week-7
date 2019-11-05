import React from "react";
import styles from "./searchbar.module.css";
import filterTopics from "../../../utils/filter/filterTopics";
import getTopicCategory from "../../../utils/filter/getTopicCategory";

const Searchbar = ({
	view,
	setView,
	topic,
	setTopic,
	category,
	setCategory,
	peopleData,
	topicData
}) => {
	const [searchbarText, setSearchbarText] = React.useState("");
	const [errors, setErrors] = React.useState(undefined);

	const handleSearchbarChange = (event) => {
		event.persist();
		setSearchbarText(event.target.value);

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

	React.useEffect(() => {
		if (!errors && topic) {
			setCategory(getTopicCategory(topic, topicData));
			setView("people");
		}
	}, [errors, topic, setCategory, setView]);

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
