const getCategories = (topicData) => {

    const categoriesList = [];
    topicData.map((topic) => {
        if (!categoriesList.includes(topic.category)) {
            categoriesList.push(topic.category);
        }
        return null;
    });
    return categoriesList;
};

export default getCategories;
