var express = require('express');
var router = express.Router();

var s = null;

/* GET users listing. */
router.get('/', function (req, res) {
    var sql = 'SELECT 1 + 1 AS solution';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/yanzeng', function (req, res) {
    var us = req.query.us; //读取用户名
    var pw = req.query.pw; //读取密码
    var sql = 'SELECT cname,names,num from users where pwd = "' + pw + '" and(cname = "' + us + '" or names = "' + us + ' "or num = "' + us + '"); ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/xmm', function (req, res) {
    var us = req.query.us; //读取用户名
    var pw = req.query.pw; //读取密码
    var sql = 'update users set pwd = "' + pw + '" where cname = "' + us + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/yznc', function (req, res) {
    var cnm = req.query.cnm; //读取昵称
    var sql = 'SELECT cname from users where cname = "' + cnm + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/yznu', function (req, res) {
    var num = req.query.num; //读取手机号
    var sql = 'SELECT num from users where num = "' + num + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/yzxm', function (req, res) {
    var us = req.query.us; //读取手机号
    var sql = 'SELECT names from users where names = "' + us + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/zc', function (req, res) {
    var cnm = req.query.cnm; //读取昵称
    var num = req.query.num; //读取手机号
    var us = req.query.us; //读取用户名
    var pw = req.query.pw; //读取密码
    var sql = 'insert into users(cname,names,pwd,num) values ("' + cnm + '" , "' + us + '" , "' + pw + '" , "' + num + '"); ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/zhmm', function (req, res) {
    var cnm = req.query.names; //读取用户名
    var num = req.query.num; //读取手机号
    var sql = 'SELECT cname from users where names = "' + cnm + '" and num = "' + num + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

function cn(sql) {
    var mysql = require('../node_modules/mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'app'
    });
    connection.connect();

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[ERROR] - ', err.message);
            return;
        }
        console.log(result);
        s = JSON.stringify(result);
    });
    connection.end();
}

module.exports = router;
