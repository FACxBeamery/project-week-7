import React from "react";
import styles from "./sidebar.module.css";
import Form from "./form/form";

const Sidebar = ({
	category,
	setCategory,
	topic,
	setTopic,
	location,
	setLocation
}) => {
	return (
		<div className={styles["nav-container"]}>
			<Form></Form>
		</div>
	);
};

export default Sidebar;
