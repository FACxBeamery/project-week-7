import React from "react";
import styles from "./select.module.css";

const Option = ({ options }) => {
	const initialArray = [
		<option value key="All">
			All
		</option>
	];
	return initialArray.concat(
		options.map((option) => (
			<option value={option} key={option}>
				{option}
			</option>
		))
	);
};

const Select = ({
	category,
	setCategory,
	location,
	setLocation,
	valueName,
	categoriesList
}) => {
	const locations = ["London", "San Francisco", "Austin"];
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
				id={`select${valueName}`}
				className={styles["select-dropdown"]}
			>
				<Option
					options={
						valueName === "category" ? categoriesList : locations
					}
					className={styles["select-option"]}
				></Option>
			</select>
		</div>
	);
};

export default Select;
