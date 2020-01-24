const request = require('request')

const url =  'https://api.darksky.net/forecast/7c8373c22d36c73dfa78cac08e353463/37.8267,-122.4233?units=si&lang=en'

function serveRequest(url){
    request({url: url, json: true}, (error, response) => {
        console.log(response.body)
        console.log(response.body.daily.data[0])
        var msg = `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees and there is ${response.body.currently.precipProbability}% chance of rain`
        console.log(msg)
    })
}


const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Nepal.json?access_token=pk.eyJ1IjoiYmlzYWxndHQiLCJhIjoiY2s1c2c2N2FhMGFpejNrbnJ6YXR3bzdwbSJ9.r1JADDxID8y3DuTGYdvXOA&limit=1'

request({url: geocodeUrl, json: true}, (error, response) => {
    console.log(response.body.features[0].place_name)
    console.log(response.body.features[0].center)
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(`Latitude: ${latitude}`)
    console.log(`Longitude: ${longitude}`)
    newURL = `https://api.darksky.net/forecast/7c8373c22d36c73dfa78cac08e353463/${latitude},${longitude}?units=si&lang=en`
    serveRequest(newURL)
})