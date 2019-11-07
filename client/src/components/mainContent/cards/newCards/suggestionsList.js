import React from "react";
import styles from "./suggestionsList.module.css";
const SuggestionsList = ({
    filteredSuggestions,
    activeSuggestion,
    setActiveSuggestion,
    setFilteredSuggestions,
    setShowSuggestions,
    setNewPersonName
}) => {
    const handleSuggestionClick = (e) => {
        console.log("suggestionClicked");
        console.log(e.target.value);
        setNewPersonName(e.target.innerText);
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };
    return filteredSuggestions.length ? (
        <ul className={styles["suggestions"]}>
            {filteredSuggestions.map((suggestion, index) => {
                let className;
                if (index === activeSuggestion) {
                    className = "suggestion-active";
                }

                return (
                    <li
                        className={styles[className]}
                        key={suggestion}
                        onClick={handleSuggestionClick}
                    >
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    ) : (
        <div class="no-suggestions">
            <p>
                {" "}
                We can't find a matching name in our database. Try checking your
                spelling!
            </p>
        </div>
    );
};

export default SuggestionsList;
