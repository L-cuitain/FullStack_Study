const http = require('http');

const url = require('url');

let hp = http.createServer();

hp.on('request',(req,res) => {
    
    // //请求方式
    // console.log(req.method);

    //请求地址
    console.log(req.url);

    // //请求头部
    // console.log(req.headers);

    //请求头
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    

    //获取请求内容
    let params = url.parse(req.url,true);

    //创建变量
    let str = '';

    //判断用户名 和 密码
    if(params.query.username == '123' && params.query.password == '1234'){
        str = '登陆成功';
    }else{
        str = '登陆失败';
    }

    res.write(str);

    res.end();
})

hp.listen(80, () => {
    console.log('请打开 http://127.0.0.1');
})