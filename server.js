// Connect to the database
require('./config/database');
// DEPENDENCIES:
const express = require('express')
require('dotenv').config()
const logger = require('morgan'); // https://www.npmjs.com/package/morgan
const path = require('path');
const favicon = require('serve-favicon');
const cors =require('cors')


// Environmental Variables
const app = express()
const PORT = process.env.PORT || 3001


//

app.use(logger('dev'));
app.use(express.json());


// Check if token and create req.user
app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// LISTEN
app.listen(port, ()=>{
    console.log(`Server is listening on, ${port}`)
})