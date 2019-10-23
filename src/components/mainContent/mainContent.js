import React from "react";
import styles from "./mainContent.module.css";
import initialDataTopics from "../../initialDataTopics";
const categories = ["frontend", "backend", "people", "non work"];
const locations = ["London", "San Francisco", "Austin"];

const CategoryCard = ({ allCategories }) => {
	return allCategories.map((category) => (
		<div className="category-card">{category}</div>
	));

	// for each item in category to render a card with the category
};

const TopicCard = ({ allTopics }) => {
	return allTopics.map((obj) => (
		<div className="topic-card">
			<p>{obj.topic}</p>
		</div>
	));
};

const MainContent = ({
	category,
	setCategory,
	topic,
	setTopic,
	location,
	setLocation,
	person,
	setPerson
}) => {
	return (
		<div>
			<CategoryCard allCategories={categories}></CategoryCard>
			{/* if condition for filtering for topics<TopicCard allTopics={topics}></TopicCard> */}
		</div>
	);
};

// const Option = ({ options }) => {
// 	const initialArray = [
// 		<option hidden disabled selected value>
// 			All
// 		</option>
// 	];
// 	return initialArray.concat(
// 		options.map((option) => <option value={option}>{option}</option>)
// 	);
// };
export default MainContent;
