import React from "react";
import styles from "./header.module.css";
import logo from "../../images/beamery.png";
import Popup from "reactjs-popup";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import SuggestionsList from "../mainContent/cards/newCards/suggestionsList";
import findMatchingNames from "../../utils/filter/findMatchingNames";

import profilePic from "../../images/profilePic.jpg";

import getProfile from "../../utils/filter/getProfile";

const ProfileModal = ({ profile }) => {
    console.log("profile ", profile);
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
            {(close) => (
                <div className={styles["modal-container"]}>
                    {" "}
                    <button className={styles["close-button"]} onClick={close}>
                        &times;
                    </button>
                    {profile ? (
                        <ProfileInformation profile={profile} />
                    ) : (
                        <InvalidNameMessage />
                    )}
                </div>
            )}
        </Popup>
    );
};

const InvalidNameMessage = () => {
    return (
        <p className={styles["invalid-person-message"]}>
            We can't find this person in our records! <br /> Please check your
            spelling and try again.
        </p>
    );
};
const ProfileInformation = ({ profile }) => {
    return (
        <>
            <p className={styles["person-name"]}>{profile[0].name}</p>
            <img
                src={profilePic}
                className={styles["profile-picture"]}
                alt="searched person"
            ></img>
            <p className={styles["person-job"]}>{profile[0].job}</p>
            <p className={styles["person-office"]}>{profile[0].office}</p>
            <ul className={styles["modal-interests"]}>
                <h3 className={styles["interests-heading"]}>Interests:</h3>
                {profile[1].length > 0
                    ? profile[1].map((topic) => (
                          <li>{capitalizeFirstLetter(topic)}</li>
                      ))
                    : "No topics of interest yet. Find a topic to add yourself!"}
                {}
            </ul>
        </>
    );
};
const SearchProfileForm = ({ setPerson, peopleData, ...props }) => {
    const [nameSearched, setNameSearched] = React.useState(null);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [activeSuggestion, setActiveSuggestion] = React.useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        setPerson(nameSearched);
        setNameSearched("");
    };

    const handleNameChange = (event, peopleData) => {
        console.log(event.target.value);
        setNameSearched(event.target.value);

        if (event.target.value.length > 1) {
            setShowSuggestions(true);
            setFilteredSuggestions(
                findMatchingNames(event.target.value, peopleData)
            );
        } else {
            setShowSuggestions(false);
        }
    };
    const handleSuggestionKeyDown = (e, showSuggestions) => {
        // if enter key
        if (showSuggestions) {
            if (e.keyCode === 13) {
                e.preventDefault();
                setActiveSuggestion(0);
                setShowSuggestions(false);
                setNameSearched(filteredSuggestions[activeSuggestion]);
            }
            //up key
            else if (e.keyCode === 38) {
                if (activeSuggestion === 0) {
                    return;
                }
                setActiveSuggestion(activeSuggestion - 1);
            } //down
            else if (e.keyCode === 40) {
                console.log("filtered suggestion", filteredSuggestions.length);
                console.log("active suggestion", activeSuggestion);
                if (activeSuggestion === filteredSuggestions.length - 1) {
                    console.log("active suggestion", activeSuggestion);
                    return;
                }

                setActiveSuggestion(activeSuggestion + 1);
                console.log("active suggestion", activeSuggestion);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles["person-form"]}>
            <label htmlFor="search-name" className={styles["input-label"]}>
                Find a person:
            </label>
            <div>
                <div className={styles["input-suggestions-container"]}>
                    <input
                        type="text"
                        name="search-name"
                        autoComplete="off"
                        onChange={(e) => handleNameChange(e, peopleData)}
                        onKeyDown={(e) =>
                            handleSuggestionKeyDown(e, showSuggestions)
                        }
                        className={styles["name-input"]}
                        id="search-name"
                        value={nameSearched}
                    ></input>
                    {showSuggestions ? (
                        <SuggestionsList
                            filteredSuggestions={filteredSuggestions}
                            activeSuggestion={activeSuggestion}
                            setActiveSuggestion={setActiveSuggestion}
                            setFilteredSuggestions={setFilteredSuggestions}
                            setShowSuggestions={setShowSuggestions}
                            setNewPersonName={setNameSearched}
                        />
                    ) : null}
                </div>
            </div>

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
            <SearchProfileForm setPerson={setPerson} peopleData={peopleData}>
                <ProfileModal profile={profile}></ProfileModal>
            </SearchProfileForm>
        </header>
    );
};
export default Header;
