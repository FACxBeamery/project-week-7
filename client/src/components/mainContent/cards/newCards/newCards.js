import React from "react";
import styles from "./newCards.module.css";
import addTopic from "../../../../utils/APIcalls/addTopic";
import addPerson from "../../../../utils/APIcalls/addPerson";
import Select from "../../../form/select/select";

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
    setNewItemAdded
}) => {
    const [newTopicTitle, setNewTopicTitle] = React.useState("");
    //	const [newTopicCategory, setNewTopicCategory] = React.useState(null);
    const [newPersonName, setNewPersonName] = React.useState("");
    const [newPersonLocation, setNewPersonLocation] = React.useState("");
    const [errors, setErrors] = React.useState({
        title: undefined,
        name: undefined
    });

    const handleTitleChange = (event) => {
        event.persist();
        setNewTopicTitle(event.target.value);
        if (event.target.value.length === 0) {
            setErrors({ ...errors, title: true });
        } else {
            setErrors({ ...errors, title: false });
        }
    };

    const handleNameChange = (event) => {
        event.persist();
        setNewPersonName(event.target.value);
        if (event.target.value.length === 0) {
            setErrors({ ...errors, name: true });
        } else {
            setErrors({ ...errors, name: false });
        }
    };
    const handleNewCardSubmit = () => {
        if (newCardType === "topic") {
            addTopic({ topic: newTopicTitle, category: category });
            setNewItemAdded(true);
        } else if (newCardType === "person") {
            addPerson({ name: newPersonName, location: newPersonLocation });
            setNewItemAdded(true);
        }
        setNewCardClicked(false);
    };
    return (
        <div className={styles["card"]}>
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
                            onChange={handleNameChange}
                            className={`${styles["title-input"]} ${
                                errors.name === true
                                    ? styles["title-error"]
                                    : null
                            }`}
                        ></input>
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
