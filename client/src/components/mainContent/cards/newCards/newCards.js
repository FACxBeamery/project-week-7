import React from "react";
import styles from "./newCards.module.css";
import addTopic from "../../../../utils/APIcalls/addTopic";
import addPerson from "../../../../utils/APIcalls/addPerson";
import findMatchingNames from "../../../../utils/filter/findMatchingNames";
import SuggestionsList from "./suggestionsList";

const NewCardButton = ({ setNewCardClicked, newCardType }) => {
    return (
        <>
            <button
                className={`${styles["card"]} ${styles["new-card-button"]}`}
                type="submit"
                onClick={() => setNewCardClicked(true)}
            >
                {newCardType === "topic" ? (
                    <h3 className={styles["form-header"]}>
                        Can't find what you're looking for? <br />
                        Add a new topic!
                    </h3>
                ) : (
                        <h3 className={styles["form-header"]}>
                            Interested in this topic?
                    </h3>
                    )}
                <p className={styles["form-plus"]}> + </p>
            </button>
        </>
    );
};

const NewCardForm = ({
    setNewCardClicked,
    newCardType,
    locationsList,
    categoriesList,
    category,
    setNewItemAdded,
    peopleData
}) => {
    const [newTopicTitle, setNewTopicTitle] = React.useState("");
    //	const [newTopicCategory, setNewTopicCategory] = React.useState(null);
    const [newPersonName, setNewPersonName] = React.useState("");
    const [newPersonLocation, setNewPersonLocation] = React.useState("");
    const [errors, setErrors] = React.useState({
        title: undefined,
        name: undefined
    });
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [activeSuggestion, setActiveSuggestion] = React.useState(0);

    const handleTitleChange = (event) => {
        event.persist();
        setNewTopicTitle(event.target.value);
        if (event.target.value.length === 0) {
            setErrors({ ...errors, title: true });
        } else {
            setErrors({ ...errors, title: false });
        }
    };

    const handleSuggestionKeyDown = (e, showSuggestions) => {
        // if enter key
        if (showSuggestions) {
            if (e.keyCode === 13) {
                e.preventDefault();
                setActiveSuggestion(0);
                setShowSuggestions(false);
                setNewPersonName(filteredSuggestions[activeSuggestion]);
            }
            //up key
            else if (e.keyCode === 38) {
                if (activeSuggestion === 0) {
                    return;
                }
                setActiveSuggestion(activeSuggestion - 1);
            } //down
            else if (e.keyCode === 40) {
                console.log("filtered suggestion", filteredSuggestions.length);
                console.log("active suggestion", activeSuggestion);
                if (activeSuggestion === filteredSuggestions.length - 1) {
                    console.log("active suggestion", activeSuggestion);
                    return;
                }

                setActiveSuggestion(activeSuggestion + 1);
                console.log("active suggestion", activeSuggestion);
            }
        }
    };

    const handleNameChange = (event, peopleData) => {
        setNewPersonName(event.target.value);
        if (event.target.value.length === 0) {
            setErrors({ ...errors, name: true });
        } else {
            setErrors({ ...errors, name: false });
        }

        if (event.target.value.length > 1) {
            setShowSuggestions(true);
            setFilteredSuggestions(
                findMatchingNames(event.target.value, peopleData)
            );
        } else {
            setShowSuggestions(false);
        }
    };
    const handleNewCardSubmit = (e) => {
        e.preventDefault();
        if (newCardType === "topic") {
            addTopic({ topic: newTopicTitle, category: category }).then(() => setNewItemAdded(true));
        } else if (newCardType === "person") {
            if (e.keyCode === 13) {
                e.preventDefault();
            } else {
                addPerson({ name: newPersonName, location: newPersonLocation });
                setNewItemAdded(true);
            }
        }
        setNewCardClicked(false);
    };
    return (
        <div className={styles["new-card-person"]}>
            <form
                className={styles["new-card-form"]}
                onSubmit={handleNewCardSubmit}
            >
                {newCardType === "topic" ? (
                    <>
                        {" "}
                        <label
                            htmlFor="newTopicTitle"
                            className={styles["input-label"]}
                        >
                            Enter a new topic:
                        </label>
                        <input
                            type="text"
                            name="newTopicTitle"
                            id="newTopicTitle"
                            value={newTopicTitle}
                            onChange={handleTitleChange}
                            className={`${styles["title-input"]} ${
                                errors.title === true
                                    ? styles["title-error"]
                                    : null
                                }`}
                        ></input>
                        {/* <Select
							//category={newTopicCategory}
							//setCategory={setNewTopicCategory}
							valueName="category"
							categoriesList={categoriesList}
						></Select>{" "} */}
                    </>
                ) : (
                        <>
                            <label
                                htmlFor="newPersonName"
                                className={styles["input-label"]}
                            >
                                Enter your name:
                        </label>
                            <input
                                type="text"
                                name="newPersonName"
                                id="newPersonName"
                                value={newPersonName}
                                autoComplete="off"
                                onChange={(e) => handleNameChange(e, peopleData)}
                                onKeyDown={(e) =>
                                    handleSuggestionKeyDown(e, showSuggestions)
                                }
                                className={`${styles["title-input"]} ${
                                    errors.name === true
                                        ? styles["title-error"]
                                        : null
                                    }`}
                            ></input>
                            {showSuggestions ? (
                                <SuggestionsList
                                    filteredSuggestions={filteredSuggestions}
                                    activeSuggestion={activeSuggestion}
                                    setActiveSuggestion={setActiveSuggestion}
                                    setFilteredSuggestions={setFilteredSuggestions}
                                    setShowSuggestions={setShowSuggestions}
                                    setNewPersonName={setNewPersonName}
                                />
                            ) : null}
                            {/* <Select
							location={newPersonLocation}
							setLocation={setNewPersonLocation}
							valueName="location"
							locationsList={locationsList}
							className={styles["select-input"]}
						></Select> */}
                        </>
                    )}

                <button
                    type="submit"
                    className={styles["new-card-submit"]}
                    disabled={
                        newCardType === "topic"
                            ? errors.title === false
                                ? null
                                : true
                            : errors.name === false
                                ? null
                                : true
                    }
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export { NewCardButton, NewCardForm };
