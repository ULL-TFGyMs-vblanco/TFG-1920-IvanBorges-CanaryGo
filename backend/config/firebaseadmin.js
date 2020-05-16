
const admin = require('firebase-admin')

const serviceAccount = require('../config/admin.json')
require('firebase/auth')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://canarygo-f725d.firebaseio.com'
})

module.exports = { admin }
