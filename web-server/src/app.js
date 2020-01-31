  const path = require('path')
  const express = require('express')
  const hbs = require('hbs')
 
  const app = express()

  // setting up paths
  const publicDirectoryPath = path.join(__dirname, '../public')
  const viewsPath = path.join(__dirname, '../templates/views')
  const partialsPath = path.join(__dirname, '../templates/partials')

  // setup handle bars engines and views location.
  app.set('view engine', 'hbs')
  app.set('views', viewsPath)
  hbs.registerPartials(partialsPath)

  //Using the publicDirectoryPath to be used by the express app - app.
  app.use(express.static(publicDirectoryPath)) // To serve the directory

  app.get('', (req, res) => { // this a route 
      res.render('index', {
        title: 'Weather',
        name: 'Bishal Gautam'
      }) // renders file with hbs extension and renders it.
  })

  console.log(__dirname)

  

  app.get('/about', (req, res) => { // another route
      res.render('about.hbs', {
        title: 'About page',
        name: 'Bishal Gautam'
      })
  })


  app.get('/help', (req, res) => { // another route
    res.render('help', {
      title: 'Help page',
      name: 'Bishal Boss'
    })
  })

  app.get('/help/*', (req, res) => {
    res.render('404', {
      title: 'Help article error!',
      name: 'Bishal Gautam',
      message: "Help article not found!"
    })
  })

  app.get('/weather', (req, res) => { // another route
      res.send({
          forecast: 'It is raining',
          location: 'Nepalgunj'
      })
  })

  app.get('*', (req, res) => {
    res.render('404', {
      title: 404,
      name: 'Bishal Gautam G!',
      message: 'Page not found, try the correct URL.'
    })
  })

  app.listen(3000, () => { // starting the server
      console.log('Listening on port 3000...')
  })