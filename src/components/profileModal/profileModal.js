import React from "react";
import styles from "./profileModal.module.css";

const profileModal = ({ profile }) => {
	/// we will need an extra argument for returning the interests
	return (
		<div className={styles["modal"]}>
			<p>{profile.name}</p>
			<p>{profile.job}</p>
			<p>{profile.office}</p>
			{/* also here we need to have the interests but after we have done some backend stuff to filter that */}
		</div>
	);
};
export default profileModal;
