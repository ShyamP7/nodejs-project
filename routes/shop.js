const express = require ('express');
const path = require ('path');
const rootdir = require ("../util/path");
const adminData = require("./admin")

const router = express.Router();
// const products = require ('./admin')

router.get('/',(req , res, next) => {
    console.log('shop.js' ,adminData.products);
    res.render('shop',{
        pageTitle : 'shops',
        prods : adminData.products
    });
});
module.exports= router;

