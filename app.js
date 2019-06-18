const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')
const commentsRouter = require('./routes/comments')
const articlesRouter = require('./routes/articles')
const usersRouter = require('./routes/users')
const app = express()
const dbConnStr = "mongodb+srv://JesusDaw:AZUrMFsLrKXvyGmB@cluster0-wdudn.mongodb.net/practica-final?retryWrites=true&w=majority"
const routePrefix = "/api/v1";

app.use(bodyParser.json())

let db = mongoose.connection;

db.on('error', function(){
    console.log('Error al contectarse con la base de datos')
});
db.once('open', function(){
    console.log('Conectado a la base de datos')
})

mongoose.connect(dbConnStr, { useNewUrlParser: true, useFindAndModify: false})

app.use(`${routePrefix}/article`, articlesRouter);
app.use(routePrefix+'/users', usersRouter)
app.use(`${routePrefix}/article`, commentsRouter);

app.listen(proccess.env.PORT || 8080, function(){
    console.log('Servidor activo en http://localhost:8080')
})