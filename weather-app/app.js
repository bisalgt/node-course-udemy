const request = require('request')

const url =  'https://api.darksky.net/forecast/7c8373c22d36c73dfa78cac08e353463/37.8267,-122.4233?units=si&lang=es'

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.currently)
    var msg = `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees and there is ${response.body.currently.precipProbability}% chance of rain`
    console.log(msg)
})