require('dotenv').config()
const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/",require("./routes/"));

app.get('/status', (req, res) => {
    res.send("Status Check: Working");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));