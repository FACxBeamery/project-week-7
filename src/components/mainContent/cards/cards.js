import React from "react";
import styles from "./cards.module.css";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import Select from "../../form/select/select";
import getTopics from "../../../utils/get/getTopics";
import getPeople from "../../../utils/get/getPeople";
import addTopic from "../../../utils/add/addTopic";
import addPerson from "../../../utils/add/addPerson";
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
		<form
			className={`${styles["card"]} ${styles["new-card-form"]}`}
			onSubmit={handleNewCardSubmit}
		>
			{newCardType === "topic" ? (
				<>
					{" "}
					<label htmlFor="newTopicTitle">Enter a new topic:</label>
					<input
						type="text"
						name="newTopicTitle"
						value={newTopicTitle}
						onChange={(e) => setNewTopicTitle(e.target.value)}
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
					<label htmlFor="newPersonName">Enter a name:</label>
					<input
						type="text"
						name="newPersonName"
						value={newPersonName}
						onChange={(e) => setNewPersonName(e.target.value)}
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
	);
};
const CategoryCards = ({
	allCategories,
	setCategory,
	setView,
	setTopicData,
	setNewCardClicked
}) => {
	const handleCategoryClick = (
		event,
		category,
		setCategory,
		setView,
		setTopicData
	) => {
		event.preventDefault();
		setCategory(category);
		setTopicData(getTopics(category));
		setView("topic");
		setNewCardClicked(false);
	};
	return allCategories.map((category) => (
		<button
			key={category}
			className={`${styles["card"]} ${styles["category-card"]} ${
				styles[category]
			}`}
			onClick={(event) =>
				handleCategoryClick(
					event,
					category,
					setCategory,
					setView,
					setTopicData
				)
			}
			type="submit"
		>
			{capitalizeFirstLetter(category)}
		</button>
	));

	// for each item in category to render a card with the category
};

const TopicCards = ({
	allTopicsDB,
	setTopic,
	setView,
	category,
	newCardClicked,
	setNewCardClicked,
	setPeopleData,
	categoriesList,
	setTopicData
}) => {
	const handleTopicClick = (event, obj, setTopic, setView) => {
		event.preventDefault();
		setTopic(obj.topic);
		setPeopleData(getPeople(obj.topic));
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
			></NewCardForm>
		) : (
			<NewCardButton
				setNewCardClicked={setNewCardClicked}
			></NewCardButton>
		),
		allTopicsDB.map((obj) => (
			<button
				className={`${styles["card"]} ${styles["topic-card"]} ${
					styles[category]
				}`}
				key={obj._id}
				onClick={(event) =>
					handleTopicClick(event, obj, setTopic, setView)
				}
			>
				{capitalizeFirstLetter(obj.topic)}
			</button>
		))
	];
};

const PeopleCards = ({
	allPeopleDB,
	newCardClicked,
	setNewCardClicked,
	locationsList,
	setPeopleData
}) => {
	return [
		newCardClicked ? (
			<NewCardForm
				setNewCardClicked={setNewCardClicked}
				newCardType="person"
				locationsList={locationsList}
				setPeopleData={setPeopleData}
			></NewCardForm>
		) : (
			<NewCardButton
				setNewCardClicked={setNewCardClicked}
			></NewCardButton>
		),
		allPeopleDB.map((obj) => (
			<div
				className={`${styles["card"]} ${styles["person-card"]}`}
				key={obj._id}
			>
				<p>{obj.name}</p>
				<p>{obj.job}</p>
				<p>{obj.office}</p>
			</div>
		))
	];
};

export { CategoryCards, TopicCards, PeopleCards };
