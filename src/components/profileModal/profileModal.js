import React from "react";
import styles from "./profileModal.module.css";

const profileModal = ({ profile, setPerson }) => {
	const closeModal = () => {
		setPerson(null);
	};

	return (
		<div className={`${styles["modal"]} ${styles["modal-content"]}`}>
			<div className={styles["modal-heading"]}>
				<p className={styles["person-name"]}>{profile.name}</p>
				<button
					className={styles["modal-close-button"]}
					onClick={closeModal}
				>
					X
				</button>
			</div>
			<p className={styles["person-job"]}>{profile.job}</p>
			<p className={styles["person-office"]}>{profile.office}</p>
			<ul className={styles["modal-interests"]}>
				<h3 className={styles["interests-heading"]}>Interests</h3>
				<li>Eating Out</li>
				<li>Saying That's Wild</li>
			</ul>

			{/* <p>{profile.topics}</p> */}
			{/* also here we need to have the interests but after we have done some backend stuff to filter that */}
		</div>
	);
};
export default profileModal;
