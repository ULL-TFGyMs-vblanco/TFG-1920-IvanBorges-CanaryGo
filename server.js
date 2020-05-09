/* eslint-disable no-path-concat */
// // Variables
// var express = require('express')
// var bodyParser = require('body-parser')
// const router = express.Router()
// var path = require('path')
// var serveStatic = require('serve-static')
// // var fs = require('fs')
// global.XMLHttpRequest = require('xhr2')
// var app = express()

// // Config
// // eslint-disable-next-line no-path-concat
// app.use(serveStatic(__dirname + '/dist/spa'))
// var port = process.env.PORT || 4000
// var hostname = 'localhost'

// // configure the app to use bodyParser()
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
// app.use(bodyParser.json())

// // OPERACIONES //
// require('./backend/requests/events')(app)
// require('./backend/requests/auth')(app)
// // ////////// //

// app.use('/', router)

// app.get('/*', function (req, res) {
//   // eslint-disable-next-line no-path-concat
//   res.sendFile(path.join(__dirname + '/dist/spa/index.html'))
// })

// // Server listening
// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

const path = require('path')
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/instatech'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/spa/index.html'))
})

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 4000)
