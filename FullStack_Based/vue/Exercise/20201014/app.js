//引入express框架
const express = require('express');
//创建服务
const app = express();
const bodyParser = require('body-parser')
// 处理静态资源
app.use(express.static('public'))
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});


//创建get请求
app.get('/data', (req, res) => {
    console.log('HelloWorld');
})


app.get('/data1', (req, res) => {
    console.log('Hello');
})

app.get('/data2', (req, res) => {
    console.log('wdnmd');
})

app.post('/postData1', (req, res) => {
    console.log('longtime no ssss');
})

app.post('/postData2', (req, res) => {
    console.log('god dement');
})

//开启服务
app.listen('3000', () => {
    console.log('请打开http://localhost:3000');
})