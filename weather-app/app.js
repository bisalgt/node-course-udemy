const request = require('request')

const geocode = require('./utils/geocode')
// const url =  'https://api.darksky.net/forecast/7c8373c22d36c73dfa78cac08e353463/26,86?units=si&lang=en'


// request({url: url, json: true}, (error, response) => {

//     if (error){
//         console.log('Unable to connect to the network!')
//     } else if (response.body.error) {
//         console.log('Wrong Input. Unable to find the URL.')
//     } else {
//         var msg = `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees and there is ${response.body.currently.precipProbability}% chance of rain`
//         console.log(msg)
//     }
    
// })

// //IN LOW LEVEL ERROR I.E.NETWORK FAILURE. ERROR EXISTS AND THE RESPONSE IN UNDEFINED.
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/nepal.json?access_token=pk.eyJ1IjoiYmlzYWxndHQiLCJhIjoiY2s1c2c2N2FhMGFpejNrbnJ6YXR3bzdwbSJ9.r1JADDxID8y3DuTGYdvXOA&limit=1&unit=si'

// request({url: geocodeUrl, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0){
//         console.log('Cannot access the location specified. Try another location!')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(`Latitude: ${latitude}`)
//         console.log(`Longitude: ${longitude}`)
//     }
    
// })




geocode('chitwan', (error, data) => {
    console.log('Error : ', error)
    console.log('Data : ', data)
})