# Nodejs Express RESTful API
## Getting Started

Clone the repo:
```sh
git clone https://github.com/saintsantos/webapp_workshop_complete.git
cd webapp_workshop_complete/server/
```

To install npm please follow the steps in the link below (mac & linux):     
[node installation for unix](https://github.com/creationix/nvm)


To install on windows:      
[node installation for windows](https://nodejs.org/en/download/)


Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

This repo will be using several differnet libraries in order to work with as our
restful API. Once of these libraries is knexjs, which is a javascript library that
allows access to a sql server through nodejs and allows for creating queries through
javascript.

Start server:
```sh
# Start server
yarn start
```

### Both http requests and sql queries will be logged to the console by default.

## Digging Deeper

Inside the server/app folder is where the major components of our API take permanent residence.

Within this folder, we have 3 main directories:
* **config**
  * Where the configuration for the RESTful API is located
* **controllers**: logic behind the endpoints
* **routes**: dictates the endpoints and functions to call

index.js is the actual launch of the server.

##config

Inside the config file, there are several files:
* winston.js
  * The configuration for our debugger. Our debugger will output all HTTP requests to our server.
* express.js
  * The configuration for our server itself.
* db.js
  * Opens the connection to our mySQL database.
* config.js
  * Here we have our express port configuration and our database connection configuration.
