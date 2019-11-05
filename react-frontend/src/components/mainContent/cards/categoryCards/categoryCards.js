import React from "react";
import styles from "./categoryCards.module.css";
import capitalizeFirstLetter from "../../../../utils/capitalizeFirstLetter";
import getTopics from "../../../../utils/get/getTopics";

const CategoryCards = ({
	allCategories,
	setCategory,
	setView,
	setTopicData,
	setNewCardClicked
}) => {
	const handleCategoryClick = (
		event,
		category,
		setCategory,
		setView,
		setTopicData
	) => {
		event.preventDefault();
		setCategory(category);
		setTopicData(getTopics(category));
		setView("topic");
		setNewCardClicked(false);
	};
	return allCategories.map((category) => (
		<button
			key={category}
			className={`${styles["card"]} ${styles["category-card"]} ${
				styles[category]
			}`}
			onClick={(event) =>
				handleCategoryClick(
					event,
					category,
					setCategory,
					setView,
					setTopicData
				)
			}
			type="submit"
		>
			{capitalizeFirstLetter(category)}
		</button>
	));

	// for each item in category to render a card with the category
};

export default CategoryCards;
