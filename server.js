// Connect to the database
require('dotenv').config()
const express = require('express')
const path = require('path')
// const logger = require('morgan') // https://www.npmjs.com/package/morgan
// const favicon = require('serve-favicon')
const cors = require('cors')
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const connectDB = require('./config/database')

connectDB()

// Environmental Variables
const app = express()
const PORT = process.env.PORT || 3001

app.use(logger)

app.use(express.json())

app.use(cookieParser())
app.use(cors({ origin: '*' })) // used to whitelist requests
// app.use(cors(corsOptions))


app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

app.use('/api/employees', require('./routes/api/employees'))

app.use('/api/users', require('./routes/api/users'))

// 404 response  
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})







// // Check if token and create req.user
// app.use(require('./config/checkToken'))

// // Put API routes here, before the "catch all" route
// app.use('/api/users', require('./routes/api/users'));


// // The following "catch all" route (note the *) is necessary
// // to return the index.html on all non-AJAX requests
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.use(errorHandler)

// Once mangoDB connects, Port Listens
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})

mongoose.connection.on('error', err => {
  console.log(err)
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})