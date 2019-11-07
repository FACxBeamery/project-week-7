import React from "react";
import styles from "./topicCards.module.css";
import capitalizeFirstLetter from "../../../../utils/capitalizeFirstLetter";

import { NewCardForm, NewCardButton } from "../newCards/newCards";
const TopicCards = ({
    allTopicsDB,
    setTopic,
    setView,
    category,
    newCardClicked,
    setNewCardClicked,
    categoriesList,
    setTopicData,
    location,
    setNewItemAdded
}) => {
    const handleTopicClick = (event, obj, setTopic, setView) => {
        event.preventDefault();
        setTopic(obj.topic);
        setView("people");
        setNewCardClicked(false);
    };
    return [
        newCardClicked ? (
            <NewCardForm
                setNewCardClicked={setNewCardClicked}
                categoriesList={categoriesList}
                setTopicData={setTopicData}
                newCardType="topic"
                key="form"
                category={category}
                setNewItemAdded={setNewItemAdded}
            ></NewCardForm>
        ) : (
            <NewCardButton
                setNewCardClicked={setNewCardClicked}
                newCardType="topic"
                key="button"
            ></NewCardButton>
        ),
        allTopicsDB.map((obj) => (
            <button
                key={obj._id}
                className={`${styles["card"]} ${styles["topic-card"]} ${
                    styles[category]
                }`}
                onClick={(event) =>
                    handleTopicClick(event, obj, setTopic, setView)
                }
            >
                {capitalizeFirstLetter(obj.topic)}
            </button>
        ))
    ];
};

export default TopicCards;
