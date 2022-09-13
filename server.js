const express=require('express')
const app =express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path') 
const mongoose = require('mongoose')
const connectDB = require("./config/database");
const indexRouter=require('./routes/index')
const authorRouter=require('./routes/authors')


app.set('view engine', 'ejs')

app.set('layout', 'layouts/layout')
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
require('dotenv').config({path: './config/.env'})


connectDB()

app.use('/', indexRouter)
app.use('/authors', authorRouter)

app.listen(process.env.PORT || 3000)

