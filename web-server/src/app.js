  const express = require('express')

  const app = express()

  app.get('', (req, res) => { // this a route
      res.send('Hello express.')
  })

  app.get('/help', (req, res) => { // another route
      res.send('Help page!')
  })
  app.get('/about', (req, res) => { // another route
      res.send('About page!')
  })
  app.get('/weather', (req, res) => { // another route
      res.send('<h1>Weather page!</h1>')
  })

  app.listen(3000, () => { // starting the server
      console.log('Listening on port 3000...')
  })