  const path = require('path')

  const express = require('express')

  const app = express()
  const publicDirectoryPath = path.join(__dirname, '../public')

  app.set('view engine', 'hbs')
  app.use(express.static(publicDirectoryPath)) // To serve the directory

  app.get('', (req, res) => { // this a route
      res.render('index', {
        name: 'Bishal Gautam',
        age: 12
      }) // renders file with hbs extension and renders it.
  })

  console.log(__dirname)

  

  app.get('/about', (req, res) => { // another route
      res.render('about.hbs', {
        name: 'andrew mead',
        age: 'bishal'
      })
      // res.send({
      //     name: 'bishal',
      //     age: 24
      // })
  })
  app.get('/help', (req, res) => { // another route
    res.render('help', {
      name: 'Helper Hemant',
      age: 25
    })
    //   res.send([{
    //     name: 'sushil'
    //   },
    //   {
    //     name: 'bishal'
    //   }
    
    // ])
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