

const readPeople = async (db) => {

    await db.collection("people").find().toArray();



};

module.exports = readPeople;