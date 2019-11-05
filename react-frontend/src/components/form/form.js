import React from "react";
import styles from "./form.module.css";
import Searchbar from "./searchbar/searchbar";
import Select from "./select/select";
const Form = ({
	view,
	setView,
	topic,
	setTopic,
	location,
	setLocation,
	peopleData,
	category,
	setCategory,
	topicData
}) => {
	return (
		<div className={styles["form"]}>
			<h2 className={styles["filter-heading"]}>Filters</h2>
			{/* <Select
				category={category}
				setCategory={setCategory}
				location={location}
				setLocation={setLocation}
				valueName="category"
				categoriesList={categoriesList}
			></Select> */}
			<Select
				location={location}
				setLocation={setLocation}
				valueName="location"
			></Select>
			<Searchbar
				view={view}
				setView={setView}
				topic={topic}
				setTopic={setTopic}
				peopleData={peopleData}
				category={category}
				setCategory={setCategory}
				topicData={topicData}
			></Searchbar>
		</div>
	);
};

export default Form;
