import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";
import Popup from "reactjs-popup";

import profilePic from "../../images/profilePic.jpg";

// import ProfileModal from "./../profileModal/profileModal";
import getProfile from "../../utils/get/getProfile";

const ProfileModal = ({ profile, profilePic }) => {
	return (
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
						<div>
							{" "}
							<button className="close" onClick={close}>
								&times;
							</button>
							<p className={styles["person-name"]}>
								{profile.name}
							</p>
							<img
								src={profilePic}
								className={styles["profile-picture"]}
								alt="searched person"
							></img>
							<p className={styles["person-job"]}>
								{profile.job}
							</p>
							<p className={styles["person-office"]}>
								{profile.office}
							</p>
							<ul className={styles["modal-interests"]}>
								<h3 className={styles["interests-heading"]}>
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
	);
};
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
					<input
						onChange={(e) => setNameSearched(e.target.value)}
						className={styles["name-input"]}
						id="search-name"
						value={nameSearched}
					></input>
				</label>
<<<<<<< HEAD:src/components/header/header.js
				<ProfileModal
					profile={profile}
					profilePic={profilePic}
				></ProfileModal>
=======

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
								<div className={styles["modal-container"]}>
									{" "}
									<button
										className={styles["close-button"]}
										onClick={close}
									>
										&times;
									</button>
									<p className={styles["person-name"]}>
										{profile.name}
									</p>
									<img
										src={profilePic}
										className={styles["profile-picture"]}
										alt="searched person"
									></img>
									<p className={styles["person-job"]}>
										{profile.job}
									</p>
									<p className={styles["person-office"]}>
										{profile.office}
									</p>
									<ul className={styles["modal-interests"]}>
										<h3
											className={
												styles["interests-heading"]
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
>>>>>>> 3c36ace70215ef54db26e19dd187985324ee2671:react-frontend/src/components/header/header.js
			</form>
		</header>
	);
};

export default Header;
