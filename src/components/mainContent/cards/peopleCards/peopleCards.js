import React from "react";
import styles from "./peopleCards.module.css";
import { NewCardButton, NewCardForm } from "../newCards/newCards";
import profilePic from "../../../../images/profilePic.jpg";

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
				key="people form"
			></NewCardForm>
		) : (
			<NewCardButton
				setNewCardClicked={setNewCardClicked}
				key="people button"
			></NewCardButton>
		),
		allPeopleDB.map((obj) => (
			<div
				className={`${styles["card"]} ${styles["person-card"]}`}
				key={obj._id}
				name={obj._id}
			>
				<p className={styles["person-name"]} key={obj.name}>
					{obj.name}
				</p>
				<img
					src={profilePic}
					className={styles["profile-picture"]}
					alt="person's profile"
				></img>
				<p className={styles["person-job"]} key={obj.job}>
					{obj.job}
				</p>

				<p className={styles["person-office"]} key={obj.location}>
					{obj.location}
				</p>
			</div>
		))
	];
};

export default PeopleCards;
