const {Sequelize} = require("sequelize");
const path = require('path')

const sequelize = new Sequelize(process.env.ZOETIC_DATABASE_NAME, process.env.ZOETIC_DATABASE_USERNAME, process.env.ZOETIC_DATABASE_PASSWORD, {
    logging: console.log,
    host: process.env.ZOETIC_DATABASE_HOST,
    port: process.env.ZOETIC_DATABASE_HOST_PORT,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    },
    logging: false
});


const models = {
    SensorData: require(path.join("./../models/ZOETIC_DEMO/SENSOR_DATA"))(sequelize, Sequelize.DataTypes),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;