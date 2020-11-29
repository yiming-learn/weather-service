    
# Project Description

Develop a UI and a REST API that allows the user to fetch the current weather for a city. 



### Prerequisites

1.  Download and Install Nodejs(https://nodejs.org/en/download/)
2.  Install Angular CLI ```npm install -g @angular/cli```



## Getting Started

Steps to start the nodejs server
1.  Open a terminal
2.  ```git clone https://github.com/yiming-learn/weather-service.git```
3.  ```npm install express --save```
4.  ```npm install cors```
5.  ```node proxy.js```

Steps to start the ui
1.  Open another terminal
2.  ```cd weather-service/ui```
3.  ```npm install```
4.  ```alias ng="/usr/local/lib/node_modules/@angular/cli/bin/ng"```
5.  ```ng serve```
6.  open a browser and type ```localhost:4200```



## Test api with Curl

1.  Make sure the nodejs server is already up
2.  Try ```curl -H "Authorization:fee31236a03b5b98d5f22dc27a41695f" http://localhost:3000/v1/weather?city=vancouver```
3.  Remove the Authorization in the header, api will fail with 401 Unauthorized error. 
    Please try `curl http://localhost:3000/v1/weather?city=vancouver`
    
## Demo ##

* video: https://drive.google.com/file/d/1uX_Magi1d3_RNV9dFL1h6evCljv410Sr/view?usp=sharing 
* screenshot1: https://drive.google.com/file/d/1OHvj6VxCcm2s_UEoEyIaHdcR4IN5Y_he/view?usp=sharing
* screenshot2: https://drive.google.com/file/d/1aGyhp1xUObXRPuhnIxMEdQ_W-3OFMMgv/view?usp=sharing
    

## Authors

* **Yiming Cao** 

## Reference 

Use existing point ```api.openweathermap.org/data/2.5/find?q=London&appid={API key}``` from https://openweathermap.org/api to fetch the current weather info.
