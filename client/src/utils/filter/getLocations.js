const getLocations = (peopleData) => {
    const locationsList = [];
    peopleData.map((person) => {
        if (!locationsList.includes(person.location)) {
            locationsList.push(person.location);
        }
        return locationsList;
    });
};

export default getLocations;
