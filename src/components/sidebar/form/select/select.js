import React from "react";
import styles from "./select.module.css";
//const categories = getCategories()

const categories = ["frontend", "backend", "people", "non-work"];
const locations = ["London", "San Francisco", "Austin"];

const Option = ({ options }) => {
	const initialArray = [
		<option hidden disabled selected value>
			All
		</option>
	];
	return initialArray.concat(
		options.map((option) => <option value={option}>{option}</option>)
	);
};

const Select = ({
	category,
	setCategory,
	location,
	setLocation,
	valueName
}) => {
	const handleSelectChange = (event, setState) => {
		event.preventDefault();
		setState(event.target.value);
	};

	return (
		<select
			value={valueName === "category" ? category : location}
			onChange={(event) =>
				handleSelectChange(
					event,
					valueName === "category" ? setCategory : setLocation
				)
			}
		>
			<Option
				options={valueName === "category" ? categories : locations}
			></Option>
		</select>
	);
};

export default Select;
