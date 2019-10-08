const express = require('express');
const app = express();
const server = require('http').createServer(app);
const parser = require('body-parser');
const url = require('url');
const path = require('path');
const fs = require('fs');
const request = require('request');
const mongoose = require('mongoose');
const config = require('./config');
const db_username = config.username;
const db_password = config.password;
const DB_uri = `mongodb+srv://${db_username}:${db_password}@wonatrack-ntvam.mongodb.net/admin?retryWrites=true&w=majority`;

async function connect(){
    await mongoose.connect(DB_uri, { useNewUrlParser : true, useUnifiedTopology : true });
}

connect().then(() => console.log('Connected to Database...')).catch(error => console.error(error.stack));

server.listen(process.env.PORT || 3020);

console.log('Server running at port 3020...');