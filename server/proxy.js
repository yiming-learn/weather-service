const express = require('express')
const app = express()
const port = 3000;
const https = require('https');
var cors = require('cors');

app.use(cors())
app.get('/v1/weather', (req, res) => {
  // Solve access control allow origin issue
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  if(!req.headers || !req.headers.authorization){
     res.status(401).json({
       errorMessage: 'Unauthorized',
       errorCode: '401'
     });

     return;
  }

  const city = req.query.city, appid = req.headers.authorization;
  
  const options = {
    hostname: 'api.openweathermap.org',
    path: `/data/2.5/weather?q=${city}&appid=${appid}`,
    method: 'GET'
  }

  const weatherReq = https.request(options, (weatherRes) => {
    weatherRes.on('data', (d) => {
      res.send(d);
    });
  });
  
  weatherReq.on('error', (e) => {
    console.error(e);
  });

  weatherReq.end();
})

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
})

