const express = require('express');
const app = express();
const server = require('http').createServer(app);
const parser = require('body-parser');
const url = require('url');
const path = require('path');
const fs = require('fs');
const request = require('request');
const mongoose = require('mongoose');
const io = require('socket.io');
const config = require('./config');
const schema = require('./schema');
const db_username = config.username;
const db_password = config.password;
const Meeting = schema.meeting;
const DB_uri = `mongodb+srv://${db_username}:${db_password}@wonatrack-ntvam.mongodb.net/meetings?retryWrites=true&authSource=admin`;

app.set('view engine','ejs');
server.use(parser.urlencoded({ extended: true}));

async function connect(){
    await mongoose.connect(DB_uri, { useNewUrlParser : true, useUnifiedTopology : true });
}

connect().then(() => console.log('Connected to Database...')).catch(error => console.error(error.stack));

server.listen(process.env.PORT || 3020);

console.log('Server running at port 3020...');

Meeting.create({
    title : 'test2',
    description : 'blabla',
    date : new Date();
    timing : '6:00 pm',
    members : "aaaaaaaaaaaaaaaaaaaa"
},function(error){
    if(error){
        console.log("Error in adding item to database");
        console.log(error);
    }
    else{
        console.log('item added to collection');
    }
});

app.get('/',function(req,res){
    res.render('pages/index.ejs');
});