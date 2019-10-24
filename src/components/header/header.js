import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";

const Header = ({ setPerson }) => {
	const [nameSearched, setNameSearched] = React.useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setPerson(nameSearched);
	};

	return (
		<header className={styles["header-container"]}>
			<img src={logo} alt="Beamery Logo" className={styles["logo"]}></img>
			<p className={styles["header-title"]}>Connect</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="search-name">
					Search for a person
					<input
						onChange={(e) => setNameSearched(e.target.value)}
					></input>
				</label>
				<button type="submit" id="submit-search-name">
					Search
				</button>
			</form>
		</header>
	);
};

export default Header;
