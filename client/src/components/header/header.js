import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";
import Popup from "reactjs-popup";

import profilePic from "../../images/profilePic.jpg";

import getProfile from "../../utils/filter/getProfile";

const ProfileModal = ({ profile }) => {
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
                      <div className={styles["modal-container"]}>
                          {" "}
                          <button className="close-button" onClick={close}>
                              &times;
                          </button>
                          <p className={styles["person-name"]}>
                              {profile[0].name}
                          </p>
                          <img
                              src={profilePic}
                              className={styles["profile-picture"]}
                              alt="searched person"
                          ></img>
                          <p className={styles["person-job"]}>
                              {profile[0].job}
                          </p>
                          <p className={styles["person-office"]}>
                              {profile[0].office}
                          </p>
                          <ul className={styles["modal-interests"]}>
                              <h3 className={styles["interests-heading"]}>
                                  Interests
                              </h3>
                              {profile[1].map((topic) => (
                                  <li>{topic}</li>
                              ))}
                          </ul>
                          {/* <p>{profile.topics}</p> */}
                          {/* also here we need to have the interests but after we have done some backend stuff to filter that */}
                      </div>
                  )
                : null}
        </Popup>
    );
};
const SearchProfileForm = ({ setPerson, ...props }) => {
    const [nameSearched, setNameSearched] = React.useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setPerson(nameSearched);
        setNameSearched("");
    };
    return (
        <form onSubmit={handleSubmit} className={styles["person-form"]}>
            <label htmlFor="search-name" className={styles["input-label"]}>
                <input
                    onChange={(e) => setNameSearched(e.target.value)}
                    className={styles["name-input"]}
                    id="search-name"
                    value={nameSearched}
                ></input>
            </label>
            {props.children}
        </form>
    );
};
const Header = ({ setPerson, setView, person, peopleData, topicData }) => {
    const [profile, setProfile] = React.useState(null);
    const returnToHome = (e) => {
        e.preventDefault();
        setView("category");
    };
    React.useEffect(() => {
        if (peopleData && topicData && person) {
            setProfile(getProfile(person, peopleData, topicData));
        }
    }, [peopleData, person, setProfile, topicData]);
    const BeameryLogo = () => (
        <img src={logo} alt="Beamery Logo" className={styles["logo"]} />
    );
    const LogoContainer = ({ ...props }) => (
        <div className={styles["logo-title-container"]} onClick={returnToHome}>
            {props.children}
        </div>
    );
    return (
        <header className={styles["header-container"]}>
            <LogoContainer>
                <BeameryLogo />
                <h1 className={styles["header-title"]}>Connect</h1>
            </LogoContainer>
            <SearchProfileForm setPerson={setPerson}>
                <ProfileModal profile={profile}></ProfileModal>
            </SearchProfileForm>
        </header>
    );
};
export default Header;