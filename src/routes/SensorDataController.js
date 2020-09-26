const moment = require('moment');
const Zoetic = require("./../db/zoetic");

/**
 * @typedef Vital
 * @property {string} type.required - can be temperature/blood/oxygen_spo2/oxygen_pr 
 * @property {string} date.required - date in YYYY-MM-DD format - eg: 2020-09-27
 * @property {string} reading.required - value depending on the type - eg: 98, 120/70
 */

/**
 * @route POST /sensor_data/store
 * @group Storing Vital Data
 * @param {Vital.model} type.body.required -
 * @returns {object} 200 - An object of with success status
 * @returns {Error}  default - Unexpected error
 * 
 */
exports.store = async(req, res) => {
    const {type, date , reading} = req.body;

    const sensor_data = { 
        type,
        date,
        reading,
    };

    try{
        const sensor_m = await Zoetic.SensorData.create(sensor_data);
        res.send({data: {}, message: "Success", status: "success"});
    }catch(e){
        res.send({data: {}, message: "Unexpected error", status: "error"});
    }
}