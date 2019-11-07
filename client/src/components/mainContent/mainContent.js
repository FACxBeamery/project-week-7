import React from "react";
import styles from "./mainContent.module.css";
import CategoryCards from "./cards/categoryCards/categoryCards";
import TopicCards from "./cards/topicCards/topicCards";
import PeopleCards from "./cards/peopleCards/peopleCards";
import ContentHeader from "./contentHeader/contentHeader";
import filterPeople from "../../utils/filter/filterPeople";
import getCategories from "../../utils/filter/getCategories";
import filterTopics from "../../utils/filter/filterTopics";
const MainContent = ({
    view,
    setView,
    topic,
    setTopic,
    peopleData,
    location,
    category,
    setCategory,
    topicData,
    setNewItemAdded,
    categoriesList,
    locationsList
}) => {
    const [newCardClicked, setNewCardClicked] = React.useState(false);
    return (
        <div key="" className={styles["main-content-container"]}>
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
                <div key="category" className={styles["cards-container"]}>
                    <CategoryCards
                        allCategories={getCategories(topicData)}
                        setCategory={setCategory}
                        setView={setView}
                        setNewCardClicked={setNewCardClicked}
                    ></CategoryCards>
                </div>
            ) : view === "topic" ? (
                <div key="topic" className={styles["cards-container"]}>
                    <TopicCards
                        allTopicsDB={filterTopics(category, topicData)}
                        setTopic={setTopic}
                        setView={setView}
                        category={category}
                        newCardClicked={newCardClicked}
                        setNewCardClicked={setNewCardClicked}
                        categoriesList={categoriesList}
                        location={location}
                        setNewItemAdded={setNewItemAdded}
                    ></TopicCards>
                </div>
            ) : (
                <div key="people" className={styles["cards-container"]}>
                    <PeopleCards
                        allPeopleDB={filterPeople(
                            topic,
                            null,
                            topicData,
                            peopleData
                        )}
                        peopleData={peopleData}
                        newCardClicked={newCardClicked}
                        setNewCardClicked={setNewCardClicked}
                        locationsList={locationsList}
                        setNewItemAdded={setNewItemAdded}
                    ></PeopleCards>
                </div>
            )}
        </div>
    );
};

export default MainContent;
