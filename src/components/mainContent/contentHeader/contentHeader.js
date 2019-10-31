import React from "react";
import styles from "./contentHeader.module.css";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const ContentHeader = ({
	view,
	category,
	topic,
	setView,
	setTopic,
	setCategory,
	setNewCardClicked
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
		setNewCardClicked(false);
	};
	return (
		<div className={styles["content-header-container"]}>
			<div className={styles["headings-container"]}>
				<h2 className={styles["heading"]}>Connect</h2>
				{view === "category" ? (
					<h3 className={styles["description"]}>
						Category view: select a category to see more
					</h3>
				) : view === "topic" ? (
					<h3>
						{`${capitalizeFirstLetter(
							category
						)} topics: select a topic to see more`}
					</h3>
				) : (
					<h3>
						{capitalizeFirstLetter(topic)}: find other people
						interested below
					</h3>
				)}
			</div>
			{view !== "category" ? (
				<div className={styles["button-container"]}>
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
						name="back-button"
						data-testid="back-button"
					>
						↩
					</button>
					<label
						className={styles["back-label"]}
						htmlFor="back-button"
					>
						back to {view === "topic" ? "categories" : "topics"}
					</label>
				</div>
			) : null}
		</div>
	);
};

export default ContentHeader;
