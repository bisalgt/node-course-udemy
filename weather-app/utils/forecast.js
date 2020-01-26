const request = require('request')

const forecast = (latitude, longitude, callback) => {
     
    const url = 'https://api.darksky.net/forecast/7c8373c22d36c73dfa78cac08e353463/'+latitude +','+longitude+'?units=si&lang=en'
    request({url, json: true}, (error, response) => {
        if (error) {
            // console.log('Unable to connect to location services!')
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error){
            // console.log(response.body.error)
            callback('Specified URL not found. Search Again with different value.', undefined) 
        } else {
            callback(undefined, {
                timezone: response.body.timezone,
                climate: response.body.currently.summary,
                temperature: response.body.currently.temperature,
                rainChances: response.body.currently.precipProbability,
                latitude: response.body.latitude,
                longitude: response.body.longitude

            })
        }
    })

}


module.exports = forecast