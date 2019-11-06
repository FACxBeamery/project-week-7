const getCategories = (topicData) => {
    console.log("topic data", topicData);
    const categoriesList = [];
    topicData.map((topic) => {
        console.log(topic.category);
        if (!categoriesList.includes(topic.category)) {
            categoriesList.push(topic.category);
        }
        return null;
    });
    return categoriesList;
};

export default getCategories;
