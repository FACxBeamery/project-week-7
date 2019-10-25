import React from "react";
import styles from "./mainContent.module.css";
import CategoryCards from "./cards/categoryCards/categoryCards";
import TopicCards from "./cards/topicCards/topicCards";
import PeopleCards from "./cards/peopleCards/peopleCards";
import ContentHeader from "./contentHeader/contentHeader";
const MainContent = ({
	topic,
	setTopic,
	categoriesList,
	locationsList,
	location
}) => {
	const [category, setCategory] = React.useState(null);
	const [view, setView] = React.useState("category");
	const [peopleData, setPeopleData] = React.useState(null);
	const [topicData, setTopicData] = React.useState(null);
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
			<div className={styles["cards-container"]}>
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
						location={location}
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
		</div>
	);
};

export default MainContent;
