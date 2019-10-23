import React from "react";
import styles from "./form.module.css";
import Searchbar from "./searchbar/searchbar";
import Select from "./select/select";
const Form = ({
	category,
	setCategory,
	topic,
	setTopic,
	location,
	setLocation
}) => {
	return (
		<form>
			<Select
				category={category}
				setCategory={setCategory}
				location={location}
				setLocation={setLocation}
				valueName="category"
			></Select>
			<Select
				category={category}
				setCategory={setCategory}
				location={location}
				setLocation={setLocation}
				valueName="location"
			></Select>
			<Searchbar topic={topic} setTopic={setTopic}></Searchbar>
		</form>
	);
};

//topic filters div
// two dropdowns
//topic searchbar

// person filters button
// on click disable topic form
//

export default Form;
