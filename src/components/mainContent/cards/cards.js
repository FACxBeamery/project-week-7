import React from "react";
import styles from "./cards.module.css";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const CategoryCards = ({ allCategories, setCategory, setView }) => {
	const handleCategoryClick = (event, category, setCategory, setView) => {
		event.preventDefault();
		setCategory(category);
		setView("topic");
	};
	return allCategories.map((category) => (
		<button
			key={category}
			className={`${styles["card"]} ${styles["category-card"]} ${
				styles[category]
			}`}
			onClick={(event) =>
				handleCategoryClick(event, category, setCategory, setView)
			}
			type="submit"
		>
			{capitalizeFirstLetter(category)}
		</button>
	));

	// for each item in category to render a card with the category
};

const TopicCards = ({ allTopicsDB, setTopic, setView, category }) => {
	const handleTopicClick = (event, obj, setTopic, setView) => {
		event.preventDefault();
		setTopic(obj.topic);
		setView("people");
	};
	return allTopicsDB.map((obj) => (
		<button
			className={`${styles["card"]} ${styles["topic-card"]} ${
				styles[category]
			}`}
			key={obj._id}
			onClick={(event) => handleTopicClick(event, obj, setTopic, setView)}
		>
			{capitalizeFirstLetter(obj.topic)}
		</button>
	));
};

const PeopleCards = ({ allPeopleDB }) => {
	return allPeopleDB.map((obj) => (
		<div
			className={`${styles["card"]} ${styles["person-card"]}`}
			key={obj._id}
		>
			<p>{obj.name}</p>
			<p>{obj.job}</p>
			<p>{obj.office}</p>
		</div>
	));
};

export { CategoryCards, TopicCards, PeopleCards };
