import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";

const Header = () => {
	return (
		<header className={styles["header-container"]}>
			<img src={logo} alt="Beamery Logo" className={styles["logo"]}></img>
			<p className={styles["header-title"]}>Connect</p>
		</header>
	);
};

export default Header;
