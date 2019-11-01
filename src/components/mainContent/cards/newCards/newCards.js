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
	setPeopleData
}) => {
	const [newTopicTitle, setNewTopicTitle] = React.useState("");
	const [newTopicCategory, setNewTopicCategory] = React.useState(null);
	const [newPersonName, setNewPersonName] = React.useState("");
	const [newPersonLocation, setNewPersonLocation] = React.useState("");
	const handleNewCardSubmit = () => {
		if (newCardType === "topic") {
			setTopicData(
				addTopic({ topic: newTopicTitle, category: newTopicCategory })
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
							onChange={(e) => setNewTopicTitle(e.target.value)}
							className={styles["title-input"]}
						></input>
						<Select
							category={newTopicCategory}
							setCategory={setNewTopicCategory}
							valueName="category"
							categoriesList={categoriesList}
						></Select>{" "}
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
							onChange={(e) => setNewPersonName(e.target.value)}
							className={styles["title-input"]}
						></input>
						<Select
							location={newPersonLocation}
							setLocation={setNewPersonLocation}
							valueName="location"
							locationsList={locationsList}
						></Select>
					</>
				)}

				<button type="submit" className={styles["new-card-submit"]}>
					Submit
				</button>
			</form>
		</div>
	);
};

export { NewCardButton, NewCardForm };
