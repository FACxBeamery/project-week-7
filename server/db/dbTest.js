const test = require("tape");
const { initDB, closeDB } = require("./dbConnect");
const {
    deleteAllPeople,
    deleteAllTopics,
    buildTestTopics,
    buildTestPeople
} = require("./dbTestBuild");
const app = require("../src/server");
var request = require("supertest");

console.log("IM TESTING heRE!!!");

test("testing /people endpoint", async (t) => {
    try {
        let db = await initDB();
        console.log("===========");
        console.log("DB INITIALISED");

        console.log("===========");

        await deleteAllPeople(db);
        await deleteAllTopics(db);
        console.log("===========");
        console.log("DB DELETED");
        console.log("===========");
        await buildTestPeople(db);
        await buildTestTopics(db);
        console.log("===========");
        console.log("DB RE BUILT");
        console.log("===========");
        try {
            let response = await request(app)
                .get("/topics")
                .expect("Content-Type", /json/)
                .expect(200);
            t.equal(response.body.length, 6);
        } catch (error) {
            console.log(error);
        }
        try {
            let response = await request(app)
                .get("/people")
                .expect("Content-Type", /json/)
                .expect(200);
            t.equal(response.body.length, 6);
        } catch (error) {
            console.log(error);
        }
        await closeDB();
        console.log("===========");
        console.log("DB CLOSED");
        console.log("===========");
        await t.end();
    } catch (err) {
        console.log(err);
    }
});
