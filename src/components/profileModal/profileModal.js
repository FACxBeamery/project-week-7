import React from "react";
import styles from "./profileModal.module.css";
// `${styles["first--form--input"]} ${
// 	styles["first--form--input--error"]
// }`
const profileModal = ({ profile }) => {
	/// we will need an extra argument for returning the interests
	return (
		<div className={`${styles["modal"]} ${styles["modal-content"]}`}>
			<p>{profile.name}</p>
			<p>{profile.job}</p>
			<p>{profile.office}</p>
			<div className={styles["modal-interests"]}>
				<p>Eating Out</p>
				<p>Saying That's Wild</p>
			</div>
			{/* <p>{profile.topics}</p> */}
			{/* also here we need to have the interests but after we have done some backend stuff to filter that */}
		</div>
	);
};
export default profileModal;
