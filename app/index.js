/**
 * Created by wujincun on 2016/10/14.
 */
var str = require('./app.js');
require('../style/style.css');
document.body.innerHTML = '<div>'+ str +'</div>';
/*

define(['./app.js'],function (str) {
    document.body.innerHTML = '<div>'+ str +'</div>';
});*/
