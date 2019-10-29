const express = require('express');
const proxy = require("http-proxy-middleware");

var app = express();

var goodsData = require('./../goods.json');
app.use('./goods',proxy({
    target: "http://localhost:8080",
    changeOrigin:true,
    pathRewrite:{
        '^/goods':'/mock/goods.json'
    }
}))

app.listen(8088)