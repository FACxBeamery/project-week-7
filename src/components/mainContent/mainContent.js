import React from "react";
import styles from "./mainContent.module.css";
import getTopics from "../../utils/get/getTopics";
import getCategories from "../../utils/get/getCategories";
import getPeople from "../../utils/get/getPeople";
import { CategoryCards, TopicCards, PeopleCards } from "./cards/cards";
import ContentHeader from "./contentHeader/contentHeader";
const MainContent = ({
	category,
	setCategory,
	topic,
	setTopic,
	location,
	setLocation,
	person,
	setPerson,
	view,
	setView
}) => {
	return (
		<div className={styles["main-content-container"]}>
			<ContentHeader
				view={view}
				category={category}
				topic={topic}
				setView={setView}
				setTopic={setTopic}
				setCategory={setCategory}
			></ContentHeader>
			{view === "category" ? (
				<CategoryCards
					allCategories={getCategories()}
					setCategory={setCategory}
					setView={setView}
				></CategoryCards>
			) : view === "topic" ? (
				<TopicCards
					allTopicsDB={getTopics(category)}
					setTopic={setTopic}
					setView={setView}
					category={category}
				></TopicCards>
			) : (
				<PeopleCards allPeopleDB={getPeople(topic)}></PeopleCards>
			)}
		</div>
	);
};

export default MainContent;
