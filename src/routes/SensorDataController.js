const moment = require('moment');
const Zoetic = require("./../db/zoetic");

exports.store = async(req, res) => {
    const {type, date , reading} = req.body;

    const sensor_data = { 
        type,
        date,
        reading,
    }

    console.log(sensor_data);
    const sensor_m = await Zoetic.SensorData.create(sensor_data);

    res.send({data: {}, message: "Success", status: "success"});
}