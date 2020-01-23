const request = require('request')

const url =  'https://api.darksky.net/forecast/7c8373c22d36c73dfa78cac08e353463/37.8267,-122.4233'

request({url: url}, (error, response) => {
    // console.log(error)
    // console.log(response.body)
    const data = JSON.parse(response.body)
    console.log(data.currently)
})