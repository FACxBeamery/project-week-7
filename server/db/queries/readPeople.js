const readPeople = async (db) => {
    const peopleCollection = await db
        .collection("people")
        .find()
        .toArray();
    return peopleCollection;
};

module.exports = readPeople;
