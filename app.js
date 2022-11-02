
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const rootdir = require('../03-finished/util/path');

const app = express();

app.use(bodyparser.urlencoded({extended : false}));

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use('/admin', admin);
app.use(shop);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    res.sendFile(path.join(rootdir,'views','error.html'))
});


app.listen(3000);
