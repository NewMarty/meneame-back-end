const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')
const comments = require('./routes/comments')
const articles = require('./routes/articles')
const usersRouter = require('./routes/users')
const app = express()
const dbConnStr = "mongodb+srv://JesusDaw:AZUrMFsLrKXvyGmB@cluster0-wdudn.mongodb.net/test?retryWrites=true&w=majority"
const routePrefix = "api/v1";

app.use(bodyParser.json())

let db = mongoose.connection;

db.on('error', function(){
    console.log('Error al contectarse con la base de datos')
});
db.once('open', function(){
    console.log('Conectado a la base de datos')
})

mongoose.connect(dbConnStr, { useNewUrlParser: true, useFindAndModify: false})

app.listen(8080, function(){
    console.log('Servidor activo en http://localhost:8080')
})

app.use(`${routePrefix}/article`, articles);
app.use(routePrefix+'/users', usersRouter)
// app.use(`${routePrefix}/article`, comments);