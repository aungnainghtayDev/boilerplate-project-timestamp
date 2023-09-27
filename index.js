// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// getting date time API ...
app.get("/date/:dateStr", function(req, res) {
  console.log("input >> " + req.params.dateStr);
  let resDate = new Date(Number.parseInt(req.params.dateStr));
  if (Number.parseInt(req.params.dateStr)) {
    console.log(req.params.dateStr + " is a number");
    return res.json({ "unix": resDate, "utc": resDate.toString() });
  } else {
    console.log(req.params.dateStr + " is not a number");
    return res.json({ "error": resDate.toString() });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
