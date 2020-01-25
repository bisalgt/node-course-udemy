const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmlzYWxndHQiLCJhIjoiY2s1c2c2N2FhMGFpejNrbnJ6YXR3bzdwbSJ9.r1JADDxID8y3DuTGYdvXOA&limit=1&unit=si'
    request({url: url, json: true},(error, response) => {
        if (error){
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find the specified location. Try again with different location.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place : response.body.features[0].place_name
            })
        }
    })

}


module.exports = geocode