const express = require("express");
const router = require("./router.js");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;


const app = express();


app.use(bodyParser);

app.use(router);



app.listen(port, () => console.log(`Listening on port ${port}`));