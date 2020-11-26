# nodejs-tracker

* Add ```package.json``` with 
```npm init```

* Install express and other packages in ```package.json```
```
{
  "dependencies": {
    "express": "*",     --> requests routing and etc
    "body-parser": "*", --> parse form data
    "ejs": "*",         --> template engine
    "morgan": "*",      --> logger
    "redis": "*"        --> nodejs-redis client
  }
}
```
*  Setup express app in ```app.js```
Optional: install hot-reload node package with
``` npm install nodemon -g```. Run: ```nodemon``` instead of ```node app.js```