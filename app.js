const express = require('express');
require('express-async-errors');
const app = express();
const bodyParser = require('body-parser')
const send = require('./models/send');


app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   req.data = {}
//   next()
// })

// use routes
const routes = require('./routes');
app.use("/", routes);


// final middlewares for error status (500 server problem || 404 page not found)
app.use(function (err, req, res, next) {
  // if (err.message === 'access denied'){
  //   res.status(500).send('Async')
  // }
    // console.error(err)
    send.sendError(res, err)
    // res.status(500).send('Something broke!')
  })

  
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
