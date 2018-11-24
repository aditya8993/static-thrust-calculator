const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const calculator = require('./thrustCalc');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {thrust: null, error: null});
})

app.post('/', function (req, res) {
  var diameter = req.body.diameter;
  var pitch = req.body.pitch;
  var rpm = req.body.rpm;
  var Thrust = String(calculator.thrustcalculation(diameter,pitch,rpm));
  res.render('index',{thrust: 'Static Thrust is ' + Thrust + 'N'})
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
