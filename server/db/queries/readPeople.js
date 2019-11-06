

const readPeople = (db, callback) => {
    db.collection("people").find().toArray(callback);
};

module.exports = readPeople;