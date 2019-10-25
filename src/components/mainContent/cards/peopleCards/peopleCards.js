import React from "react";
import styles from "./peopleCards.module.css";
import { NewCardButton, NewCardForm } from "../newCards/newCards";

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
				<p className={styles["person-name"]}>{obj.name}</p>
				<p className={styles["person-job"]}>{obj.job}</p>
				<p className={styles["person-office"]}>{obj.office}</p>
			</div>
		))
	];
};

export default PeopleCards;
