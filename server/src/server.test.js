const { describe, test, expect } = require("jest");
const request = require("supertest");
const app = require("./server");

describe("Test the root path", () => {
    test("It should respond to the GET method", (done) => [
        request(
            app.get("/").then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            })
        )
    ]);
});
