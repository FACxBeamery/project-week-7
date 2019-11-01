import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";

const Header = ({ setPerson, setView }) => {
	const [nameSearched, setNameSearched] = React.useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setPerson(nameSearched);
	};

	const returnToHome = (e) => {
		e.preventDefault();
		setView("category");
	};

	return (
		<header className={styles["header-container"]}>
			<div
				className={styles["logo-title-container"]}
				onClick={returnToHome}
			>
				<img
					src={logo}
					alt="Beamery Logo"
					className={styles["logo"]}
				></img>

				<h1 className={styles["header-title"]}>Connect</h1>
			</div>
			<form onSubmit={handleSubmit} className={styles["person-form"]}>
				<label htmlFor="search-name" className={styles["input-label"]}>
					Search for a person:
					<input
						onChange={(e) => setNameSearched(e.target.value)}
						className={styles["name-input"]}
						id="search-name"
					></input>
				</label>
				<button
					type="submit"
					className={styles["submit-button"]}
					id="submit-search-name"
				>
					Search
				</button>
			</form>
		</header>
	);
};

export default Header;
