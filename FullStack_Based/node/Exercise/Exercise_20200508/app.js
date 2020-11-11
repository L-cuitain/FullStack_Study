const http = require('http');

const url = require('url');

const queryString = require('querystring');

let hp = http.createServer();

hp.on('request',(req,res) => {

    //请求地址
    console.log(req.url);

    //请求头
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})

    let postData = '';

    //创建 data事件  监听数据传输事件
    req.on('data', (chunk) => {
        // chunk获取到的数据  字符串的16进制表示
        
        //在传输中 不能保证数据传输完整
        // 一直拼接数据
        postData += chunk;
    })

    // end事件
    req.on('end', () => {
        //把数据变成对象
        let finalData = queryString.parse(postData);
        console.log(finalData);

        if(finalData.username == '123' && finalData.password == '1234'){
            res.end('登录成功');
        }else{
            res.end('登录失败');
        }
        
        // body-parser 直接获取到post请求的数据
    })
})

hp.listen(3000, () => {
    console.log('请打开 http://127.0.0.1:3000');
})