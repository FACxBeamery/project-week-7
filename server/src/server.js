const express = require("express");
const router = require("./router.js");
const bodyParser = require("body-parser");
const initDB = require("../db/dbConnect").initDB;



const port = process.env.PORT || 4000;



const app = express();
// const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";


app.use(bodyParser);

app.use(router);




initDB().then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch(console.error);
