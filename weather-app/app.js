const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv)
const address = process.argv[2]
if (address) {
    geocode(address, (error, {latitude, longitude, place}) => {
    
        if (error) {
            return console.log(error)
        }
        console.log('Error : ', error)
        console.log('Data : ', latitude, longitude)
    
        forecast(latitude, longitude, (error, data) => {
    
            if (error) {
                return console.log(error)
            }
            console.log(data)
            const {timezone, climate, temperature, rainChances} = data // Object destructuring
            const msg = `The climate for ${timezone} is ${climate}. It is ${temperature} degree with ${rainChances} % of rain.`
            console.log(msg)
        })
    })
    
} else {
    console.log('Supply a location in the CLI')
}


