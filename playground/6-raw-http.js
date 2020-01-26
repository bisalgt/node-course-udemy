const https = require('https')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/nepal.json?access_token=pk.eyJ1IjoiYmlzYWxndHQiLCJhIjoiY2s1c2c2N2FhMGFpejNrbnJ6YXR3bzdwbSJ9.r1JADDxID8y3DuTGYdvXOA&limit=1&unit=si'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data +chunk.toString()
    })

    response.on('end', () => {
        console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })


})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()