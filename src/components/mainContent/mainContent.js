import React from "react";
import styles from "./mainContent.module.css";
import initialDataTopics from "../../initialDataTopics";
const categories = ["frontend", "backend", "people", "non work"];
const locations = ["London", "San Francisco", "Austin"];

const CategoryCards = ({ allCategories }) => {
	return allCategories.map((category) => (
		<div className="category-card">{category}</div>
	));

	// for each item in category to render a card with the category
};

const TopicCards = ({ allTopicsDB }) => {
	return allTopicsDB.map((obj) => (
		<div className="topic-card">
			<p>{obj.topic}</p>
		</div>
	));
};

const PersonCards = ({ allPeopleDB }) => {
	return allPeopleDB.map((obj) => (
		<div className="person-card">
			<p>{obj.name}</p>
			<p>{obj.job}</p>
			<p>{obj.office}</p>
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
			<CategoryCards allCategories={categories}></CategoryCards>
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
