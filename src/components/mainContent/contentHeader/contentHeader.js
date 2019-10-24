import React from "react";
import styles from "./contentHeader.module.css";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const ContentHeader = ({
	view,
	category,
	topic,
	setView,
	setTopic,
	setCategory
}) => {
	const handleBackClick = (event, view, setView, setTopic, setCategory) => {
		event.preventDefault();
		if (view === "people") {
			setView("topic");
			setTopic(null);
		} else if (view === "topic") {
			setView("category");
			setCategory(null);
		}
	};
	return (
		<>
			<div className={styles["headings-div"]}>
				<h2>Connect</h2>
				{view === "category" ? (
					<h3>Category view: select a category to see more</h3>
				) : view === "topic" ? (
					<h3>
						{`${capitalizeFirstLetter(
							category
						)} topics: select a topic to see more`}
						s
					</h3>
				) : (
					<h3>
						{capitalizeFirstLetter(topic)}: find other people
						interested below
					</h3>
				)}
			</div>
			{view !== "category" ? (
				<button
					className={styles["back-button"]}
					onClick={(event) =>
						handleBackClick(
							event,
							view,
							setView,
							setTopic,
							setCategory
						)
					}
					type="submit"
				>
					⬅
				</button>
			) : null}
		</>
	);
};

export default ContentHeader;
