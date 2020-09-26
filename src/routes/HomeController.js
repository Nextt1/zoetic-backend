const Zoetic = require("./../db/zoetic");

/**
 * @route GET /home
 * @group Fetching most recent vital data for a given date
 * @param {string} date.query.required - date in YYYY-MM-DD format - eg: 2020-09-27
 * @returns {object} 200 - An object of vital data
 * @returns {Error}  default - Unexpected error
 */
exports.index = async(req, res) => {

    const {date} = req.query;

    const temperature_con = {
        where: {
            date,
            type: "temperature"
        },
        order: [['id', 'desc']],
        limit: 10,
    }

    const blood_con = {
        where: {
            date,
            type: "blood"
        },
        order: [['id', 'desc']],
        limit: 10,
    }

    const oxygen_pr_con = {
        where: {
            date,
            type: "oxygen_pr"
        },
        order: [['id', 'desc']],
        limit: 10,
    }

    const oxygen_spo2_con = {
        where: {
            date,
            type: "oxygen_spo2"
        },
        order: [['id', 'desc']],
    }

    try{
        const temperature_m = await Zoetic.SensorData.findAll(temperature_con);
        const blood_m = await Zoetic.SensorData.findAll(blood_con);
        const oxygen_pr_m = await Zoetic.SensorData.findAll(oxygen_pr_con);
        const oxygen_spo2_m = await Zoetic.SensorData.findOne(oxygen_spo2_con);
    
        let temperature = [];
        let blood = [];
        let oxygenPr = [];
    
        temperature_m.map(eachTemperature => {
            temperature.push(parseInt(eachTemperature.reading));
        });
    
        blood_m.map(eachBlood => {
            blood.push(parseInt(eachBlood.reading.replace("/70", "")));
        });
    
        oxygen_pr_m.map(eachOxygenPr => {
            oxygenPr.push(parseInt(eachOxygenPr.reading));
        });
    
        res.send({data: {
            temperature,
            blood,
            oxygenPr,
            oxygenSpo2: oxygen_spo2_m ? oxygen_spo2_m.reading : 0
        }, message: "Success", status: "success"});
    }catch(e){
        console.log(e);

        res.send({data: {}, message: "Unexpected error", status: "error"});
    }
}