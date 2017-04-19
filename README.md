# Nodejs Express RESTful API

Welcome to the second workshop in the UB Scientista/ACM Web Application Workshop Series! This week we will be developing the "back end"/server-side of our application using Node.js.

![Node.js Logo](https://cloud.githubusercontent.com/assets/15008142/25106404/434e7a50-2397-11e7-8f63-f2b971f15418.png)

## Getting Started

Clone the repo and checkout the api branch:
```sh
git clone https://github.com/saintsantos/webapp_workshop_complete.git
cd webapp_workshop_complete/server/ && git checkout api
```

To install npm please follow the steps in the link below:

**To install on Mac & Linux:**

Install wget:
```sh
Mac: brew install wget
Linux(Ubuntu): sudo apt-get install wget
Linux(Fedora): sudo dnf install wget
Linux(Arch): sudo pacman -S wget
```

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

then run

```sh
nvm install node
```


**To install on Windows:**     
[node installation for windows](https://nodejs.org/en/download/)

**Install dependencies:**
```sh
npm install
```

This repo will be using several different libraries in order to work as our
restful API. One of these libraries is Knex.js, which is a JavaScript library that
allows access to a SQL server through Node.js and allows for creating queries through
JavaScript.

**Start server:**
```sh
# Start server
npm start
```

Install Postman from the chrome web store [here](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

### What is a RESTful API?
REST stands for representational state transfer. It is a software architecture for distributed systems such as the World Wide Web.
The internet actually represents the largest implementation of a RESTful system.

The way a RESTful architecture works is through the use of clients and servers.
* The client makes an HTTP request to a server when it is looking to update its state.
* Once the server receives the request, it processes that request and sends a response back to the server that contains the result of the request.
* The client can then update itself according to the information that it receives from the server. Most of the time this data is sent in the form of JSON objects.


### Both HTTP requests and SQL queries will be logged to the console by default
Any and all calls you make to your API in this application will be logged to the console so that you can see what the call looks like and understand how the API interprets
the call. In this workshop we will only be sending GET and POST requests to our API.

## Digging Deeper

Inside the server/app folder is where the major components of our API reside.

Within this folder, we have 2 main directories:
* **config**
  * Where the configuration for the RESTful API is located.
* **routes**:
  * Dictates the endpoints and functions to call and implement the functions that will
    be triggered once an endpoint is called.

**index.js** is where the server actually launches.

### config

Inside the config file, there are several files:
* **winston.js**
  * The configuration for our debugger. Our debugger will output all HTTP requests to our server.
* **db.js**
  * Opens the connection to our mySQL database.
* **config.js**
  * Here we have our express port configuration and our database connection configuration.

### routes

Routes map endpoints to functions. Our routes are defined in **index.route.js** and consist of the userRoute and the taskRoute.

The routes distinguish between endpoints based upon which URL is called and the type of HTTP request.

The two main types of requests we'll be dealing with and that are most common across the Internet are **POST** and **GET**. You can read more about them [here](https://www.w3schools.com/tags/ref_httpmethods.asp).

Here we declare an endpoint in the application that accepts a GET request:
  ```javascript
  router.get('/task/', function(req, res) {});
  ```
This route also has a function declared with it that handles the logic that triggers when this endpoint is called.

Here we declare an endpoint that accepts a POST request:
  ```javascript
  router.post('/task/:id',function(req, res) {});
  ```

Now that we know what the endpoints look like, let's dig a little further into them.
* `router` is simply the express library in Node.js that lets us declare this as a route.
* `.get() & .post()` are the types of requests that these endpoints will accept.
* `req` is the actual request body itself. This can be called and accessed using standard context
for accessing any JSON object in JavaScript.
* `res` is the response header for this endpoint. This is where we insert any data we want to send back to the frontend.

Notice how the URL has a `:id` in it. That is known as a parameter. We can pass a
parameter into our logic for our endpoint by simply modifying this value when we call
the endpoint. 

We change the endpoint in this example by calling:
`http://localhost/task/3` to get tasks created by user with the id of 3.

There are other ways as well. We can append our URL using query information in order to send different
data under different key:value stores, as well as sending JSON through the request body
as well. We can access each of these parts of the request in JavaScript by calling a different part of the request:
  * Parameters to URLs
    ```javascript
    req.params.<key>
    ```
  * Query data sent to URL:
    ```javascript
    req.query.<key>
    ```
  * Body data sent in the request:
    ```javascript
    req.body.<key>
    ```

Using these values allows you to control what the function at the endpoint does and helps you to get the data that you want when you call these endpoints.

### controllers

The functions that are executed when an endpoint is called. In our API these are implicitly declared at our endpoints.

## knexjs

knexjs is a JavaScript package that allows for SQL queries to be made directly through JavaScript. This is what we'll be using to interface with our database. Documentation can be found [here](http://knexjs.org).

![knex.js Logo](http://knexjs.org/assets/images/knex.png)

Here's an example of several of our database calls that we make in our API:

* #### Select all rows from a table:
  ```javascript
  db('tasks')
  .select()
  .then(function(result) {
      res.send(result);
  });
  ```
* #### Select only certain elements from a table (where clause):
  ```javascript
  db('tasks')
  .select('task')
  .where({created_by: req.params.id})
  .then(function(tasks) {
    res.send(tasks);
  });
  ```

* #### Insert into a table:
  ```javascript
  db('tasks')
  .insert({task: req.query.task, created_by: req.params.id}, 'id')
  ```
