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
		<div className={styles["select-label-container"]}>
			<label
				htmlFor={`select${valueName}`}
				className={styles["select-label"]}
			>
				{valueName.charAt(0).toUpperCase() + valueName.slice(1) + ":"}
			</label>
			<select
				value={valueName === "category" ? category : location}
				onChange={(event) =>
					handleSelectChange(
						event,
						valueName === "category" ? setCategory : setLocation
					)
				}
				name={`select${valueName}`}
				className={styles["select-dropdown"]}
			>
				<Option
					options={valueName === "category" ? categories : locations}
					className={styles["select-option"]}
				></Option>
			</select>
		</div>
	);
};

export default Select;
