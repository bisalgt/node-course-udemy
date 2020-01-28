  const express = require('express')

  const app = express()

  app.get('', (req, res) => { // this a route
      res.send('Hello express.')
  })

  app.get('/help', (req, res) => { // another route
      res.send({
          name: 'bishal',
          age: 24
      })
  })
  app.get('/about', (req, res) => { // another route
      res.send([{
        name: 'sushil'
      },
      {
        name: 'bishal'
      }
    
    ])
  })
  app.get('/weather', (req, res) => { // another route
      res.send({
          forecast: 'It is raining',
          location: 'Nepalgunj'
      })
  })

  app.listen(3000, () => { // starting the server
      console.log('Listening on port 3000...')
  })