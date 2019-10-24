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
	view,
	setView,
	categoriesList,
	topicData,
	setTopicData,
	peopleData,
	setPeopleData,
	locationsList
}) => {
	const [newCardClicked, setNewCardClicked] = React.useState(false);
	return (
		<div className={styles["main-content-container"]}>
			<ContentHeader
				view={view}
				category={category}
				topic={topic}
				setView={setView}
				setTopic={setTopic}
				setCategory={setCategory}
				setNewCardClicked={setNewCardClicked}
			></ContentHeader>
			{view === "category" ? (
				<CategoryCards
					allCategories={categoriesList}
					setCategory={setCategory}
					setView={setView}
					setTopicData={setTopicData}
					setNewCardClicked={setNewCardClicked}
				></CategoryCards>
			) : view === "topic" ? (
				<TopicCards
					allTopicsDB={topicData}
					setTopic={setTopic}
					setView={setView}
					category={category}
					newCardClicked={newCardClicked}
					setNewCardClicked={setNewCardClicked}
					setPeopleData={setPeopleData}
					categoriesList={categoriesList}
				></TopicCards>
			) : (
				<PeopleCards
					allPeopleDB={peopleData}
					newCardClicked={newCardClicked}
					setNewCardClicked={setNewCardClicked}
					locationsList={locationsList}
					setPeopleData={setPeopleData}
				></PeopleCards>
			)}
		</div>
	);
};

export default MainContent;
