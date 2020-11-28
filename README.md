# weather-service
Develop a REST API that allows the user to fetch the current weather for a city. The service should accept the name of the city and return a JSON representation of the current weather in that city.

Steps to initiate the app:
    1 Git clone: git clone https://github.com/yiming-learn/weather-service.git
    2 cd weather-service/server
    3 npm install express --save
    npm install cors
    4 node proxy.js => The express js server will be up
    5 Let us move to the ui side. Please open a terminal
    6 cd weather-service/ui
    7 npm install
    alias ng="/usr/local/lib/node_modules/@angular/cli/bin/ng"
    8 ng serve => the angularjs application will be up
    9 open a browser and type localhost:4200

Steps to test the api:
    1 Make sure the express js server is already up
    2 You can try `curl -H "Authorization:fee31236a03b5b98d5f22dc27a41695f" http://localhost:3000/v1/weather?city=vancouver`
    3 If we remove the Authorization in the header, it will fail. Please try `curl http://localhost:3000/v1/weather?city=vancouver`

Demo:
    https://drive.google.com/file/d/1uX_Magi1d3_RNV9dFL1h6evCljv410Sr/view?usp=sharing