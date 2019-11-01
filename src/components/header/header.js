import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";
import Popup from "reactjs-popup";
import stylesx from "../profileModal/profileModal.module.css";
import profilePic from "../../images/profilePic.jpg";

// import ProfileModal from "./../profileModal/profileModal";
import getProfile from "../../utils/get/getProfile";

const Header = ({ setPerson, setView, person }) => {
	const [profile, setProfile] = React.useState(null);
	const [nameSearched, setNameSearched] = React.useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setPerson(nameSearched);
		setNameSearched("");
	};
	React.useEffect(() => {
		setProfile(getProfile(person));
	}, [person]);

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
						value={nameSearched}
					></input>
				</label>
				<Popup
					trigger={
						<button
							type="submit"
							className={styles["submit-button"]}
							id="submit-search-name"
						>
							Search
						</button>
					}
					modal
				>
					{profile
						? (close) => (
								<div
									className={`${stylesx["modal"]} ${
										styles["modal-heading"]
									}`}
								>
									{" "}
									<a className="close" onClick={close}>
										&times;
									</a>
									<p className={stylesx["person-name"]}>
										{profile.name}
									</p>
									{/* <button
								className={stylesx["modal-close-button"]}
								onClick={() => {
									setPerson(null);
								}}
							>
								X
							</button> */}
									<img
										src={profilePic}
										className={stylesx["profile-picture"]}
										alt="searched person"
									></img>
									<p className={stylesx["person-job"]}>
										{profile.job}
									</p>
									<p className={stylesx["person-office"]}>
										{profile.office}
									</p>
									<ul className={stylesx["modal-interests"]}>
										<h3
											className={
												stylesx["interests-heading"]
											}
										>
											Interests
										</h3>
										<li>Eating Out</li>
										<li>Saying That's Wild</li>
									</ul>
									{/* <p>{profile.topics}</p> */}
									{/* also here we need to have the interests but after we have done some backend stuff to filter that */}
								</div>
						  )
						: null}
				</Popup>
			</form>
		</header>
	);
};

export default Header;
