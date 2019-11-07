const findMatchingNames = (searchInput, peopleData) => {
    console.log(peopleData);
    console.log(searchInput);
    const strippedLowercaseInput = searchInput
        .replace(/^\s+|\s+$/g, "")
        .toLowerCase();

    const peopleWithMatchingNames = peopleData.filter((personObj) =>
        personObj.name.toLowerCase().startsWith(strippedLowercaseInput)
    );
    console.log("people mathcing", peopleWithMatchingNames);
    const matchingNamesArray = peopleWithMatchingNames.map(
        (personObj) => personObj.name
    );
    return matchingNamesArray;
};

export default findMatchingNames;
