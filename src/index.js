require('dotenv').config()
const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const port = 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/",require("./routes/"));

app.get('/status', (req, res) => {
    res.send("Status Check: Working");
})

let options = {
    swaggerDefinition: {
        info: {
            description: 'Zoetic AI Vital Demo APIs',
            title: 'Zoetic AI Demo APIs',
            version: '1.0.0',
        },
        host: '18.219.91.172:4000',
        produces: [ "application/json" ],
        schemes: ['http'],
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));