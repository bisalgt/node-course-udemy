const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv)
const address = process.argv[2]
if (address) {
    geocode(address, (error, data) => {
    
        if (error) {
            return console.log(error)
        }
        console.log('Error : ', error)
        console.log('Data : ', data)
    
        forecast(data.latitude, data.longitude, (error, data) => {
    
            if (error) {
                return console.log(error)
            }
            console.log(data)
            const msg = `The climate for ${data.timezone} is ${data.climate}. It is ${data.temperature} degree with ${data.rainChances} % of rain.`
            console.log(msg)
        })
    })
    
} else {
    console.log('Supply a location in the CLI')
}


