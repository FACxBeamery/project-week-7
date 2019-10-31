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
	setPeopleData,
	category,
	setCategory,
	topicData,
	setTopicData
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
				setPeopleData={setPeopleData}
				category={category}
				setCategory={setCategory}
				topicData={topicData}
				setTopicData={setTopicData}
			></Searchbar>
		</div>
	);
};

//topic filters div
// two dropdowns
//topic searchbar

// person filters button
// on click disable topic form
//

export default Form;
