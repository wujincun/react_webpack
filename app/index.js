/**
 * Created by wujincun on 2016/10/14.
 */
var str = require('./app');
require('../style/style');
document.body.innerHTML = '<div>'+ str +'</div>';
/*

define(['./app.js'],function (str) {
    document.body.innerHTML = '<div>'+ str +'</div>';
});*/
