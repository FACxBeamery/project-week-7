const app = require("./src/server");

const initDB = require("./db/dbConnect").initDB;

const port = process.env.PORT || 4000;

initDB()
    .then(() => {
        app.listen(port, () => console.log(`Listening on port ${port}`));
    })
    .catch(console.error);
