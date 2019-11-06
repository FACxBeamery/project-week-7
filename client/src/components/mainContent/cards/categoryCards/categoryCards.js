import React from "react";
import styles from "./categoryCards.module.css";
import capitalizeFirstLetter from "../../../../utils/capitalizeFirstLetter";

const CategoryCards = ({
    allCategories,
    setCategory,
    setView,
    setNewCardClicked
}) => {
    console.log("all categories", allCategories);
    const handleCategoryClick = (event, category, setCategory, setView) => {
        event.preventDefault();
        setCategory(category);
        setView("topic");
        setNewCardClicked(false);
    };
    return allCategories.map((category) => (
        <button
            key={category}
            className={`${styles["card"]} ${styles["category-card"]} ${
                styles[category]
            }`}
            onClick={(event) =>
                handleCategoryClick(event, category, setCategory, setView)
            }
            type="submit"
        >
            {capitalizeFirstLetter(category)}
        </button>
    ));

    // for each item in category to render a card with the category
};

export default CategoryCards;
