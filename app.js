const express = require('express')
const app = express()
const db = require('./db/db');

// const usersRouter = require('./routes/users');
// app.use("/users", usersRouter);

db.connect();

//require('./db/data');

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port'));
});