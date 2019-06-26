# Instagram
Develope a Web application, analogue Instagram.
# Getting started

## Install
```sh
  $ git clone git://github.com/odemyanenko/project-instagram.git  
  $ npm install
  $ npm start
```
Then visit [http://localhost:3000/](http://localhost:3000/)

# Code Overview
## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript

## Directory structure
```
-app/
  |__client/
  |__controllers/
  |__db/
  |__models/
  |__routes/
```

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Error Handling

## Authentication

## Authors

* **Olga Demyanenko** - [odemyanenko](https://github.com/odemyanenko)
* **Marina Savluchinska** - [anauk](https://github.com/anauk)
* **Volodymyr Shkil** - [vovashkil](https://github.com/vovashkil)

See also the list of [contributors](https://github.com/odemyanenko/project-instagram/contributors) who participated in this project.

<br /> 