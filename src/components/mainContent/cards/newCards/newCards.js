import React from "react";
import styles from "./newCards.module.css";
import addTopic from "../../../../utils/add/addTopic";
import addPerson from "../../../../utils/add/addPerson";
import Select from "../../../form/select/select";

const NewCardButton = ({ setNewCardClicked }) => {
	return (
		<button
			className={`${styles["card"]} ${styles["new-card-button"]}`}
			type="submit"
			onClick={() => setNewCardClicked(true)}
		>
			+
		</button>
	);
};

const NewCardForm = ({
	setNewCardClicked,
	newCardType,
	locationsList,
	categoriesList,
	setTopicData,
	setPeopleData,
	category
}) => {
	const [newTopicTitle, setNewTopicTitle] = React.useState("");
	//	const [newTopicCategory, setNewTopicCategory] = React.useState(null);
	const [newPersonName, setNewPersonName] = React.useState("");
	const [newPersonLocation, setNewPersonLocation] = React.useState("");
	const [errors, setErrors] = React.useState({
		title: undefined,
		name: undefined
	});

	console.log("errors =", errors);

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
			setTopicData(
				addTopic({ topic: newTopicTitle, category: category })
			);
		} else if (newCardType === "person") {
			setPeopleData(
				addPerson({ name: newPersonName, location: newPersonLocation })
			);
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
							Enter a name:
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
						<Select
							location={newPersonLocation}
							setLocation={setNewPersonLocation}
							valueName="location"
							locationsList={locationsList}
							className={styles["select-input"]}
						></Select>
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
