var express = require('express');
var router = express.Router();

var s = null;

router.get('/', function (req, res) {
    var sql = 'SELECT 1 + 2 AS solution';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/fadan', function (req, res) {
    var nt1 = req.query.nt; //读取姓名
    var pt1 = req.query.pt; //读取手机号
    var ct1 = req.query.ct; //读取快递公司
    var it1 = req.query.it; //读取取货号
    var at1 = req.query.at; //读取宿舍楼
    var pat1 = req.query.pat; //读取金额
    var tt1 = req.query.tt; //读取送达时间
    var rs1 = req.query.rs; //读取送达时间
    var sql = 'INSERT INTO orders ( names, num, exc, thn, des, pay, time, rs, stm) VALUES ("'+nt1+'", "'+pt1+'", "'+ct1+'", "'+it1+'", "'+at1+'", "'+pat1+'", "'+tt1+'", "'+rs1+'", "'+0+'"); ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/chaxun',function (req,res) {
    var sql = 'select auto_nums,exc from orders where stm = "' + 0 + '";';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/chaxunF',function (req,res) {
    var cname=req.query.rs;
    var sql = 'select auto_nums,exc from orders where rs = "' + cname + '";';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/chaxunJ',function (req,res) {
    var cname=req.query.rc;
    var sql = 'select auto_nums,exc from orders where rc = "' + cname + '";';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/AN',function (req,res) {
    var AN=req.query.AN;
    var sql = 'select names,num,exc,thn,des,pay,time,rs,rc,stm from orders where auto_nums = "' + AN + '";';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/qr',function (req,res) {
    var AN=req.query.an;
    var sql = 'update orders set stm = "' + 5 + '" where auto_nums = "' + AN + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/qrcx',function (req,res) {
    var AN=req.query.AN;
    var sql = 'select rc from orders where auto_nums = "' + AN + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/qrjd',function (req,res) {
    var AN=req.query.AN;
    var rc=req.query.rc;
    var sql = 'update orders set stm = "' + 1 + '",rc="'+ rc +'" where auto_nums = "' + AN + '"; ';
    cn(sql);
    setTimeout(function () {
        res.send(s);
    }, 20);
});

router.get('/qrsd',function (req,res) {
    var AN=req.query.AN;
    var sql = 'update orders set stm = "' + 4 + '" where auto_nums = "' + AN + '"; ';
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
        s = JSON.stringify(result);7
    });
    connection.end();
}

module.exports = router;