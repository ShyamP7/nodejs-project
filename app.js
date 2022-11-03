
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
// const rootdir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyparser.urlencoded({extended : false}));
 
const adminData = require('./routes/admin');
const shop = require('./routes/shop');

app.use('/admin', adminData.routes);
app.use(shop);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    //nres.sendFile(path.join(rootdir,'views','error.html'))
    res.render('error', { pageTitle : 'page not found'});
});


app.listen(3005);
