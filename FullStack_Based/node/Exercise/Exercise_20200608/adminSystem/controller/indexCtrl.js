//引入数据库文件
const User = require('../model/user');

//引入 md5加密
const md5 = require('md5');

//导出方法
module.exports.show = (req,res) => {
    
    //判断session中是否存在username
    if(!req.session.username){
        res.render('login');
    }else{
        //如果存在 则重定向到user中
        res.redirect('/user');
    }
}

module.exports.login = async (req,res) => {
    
    //获取登录数据
    let { email , password } = req.body;    
        
    //后端校验
    if(email.trim().length == 0 || password.trim().length == 0){        
        res.status(400).send({code : 400,msg : '邮箱或密码错误'})
    }
    
    //查询数据库
    //查询数据库中是否有这个邮箱对应的数据  如果有 则再判断密码是否对应  如果对应 则发送200 不对应则发送400

    let user = await User.findOne({ email : email });

    //判断user是否为空
    if(user){
        // console.log('原始密码:'+password);
        // console.log('加密密码:'+ md5(md5(md5(password))));
        // console.log('数据库密码:'+ user.password);
        // console.log(user);
        
        //获取密码
        let finalPwd = (md5(md5(md5(password))) === user.password) && user.status;

        if(finalPwd){
            //判断如果密码正确的话 则登录成功
            //将登录成功的账号所需要的数据存入session中
            req.session.username = user.username;

            //通过req.app.locals 将用户名添加在模板中显示
            req.app.locals.userInfo = user;
            
            res.status(200).send({code : 200,msg : '登陆成功'})
        }else{
            res.status(400).send({code : 400,msg : '邮箱或密码错误'})
        }

    }else{
        res.status(400).send({code : 400,msg : '邮箱或密码错误'})
    }
}


module.exports.logout = (req,res) => {
    //删除cookie  使用req.session的destroy销毁方法
    req.session.destroy(function(err) {
        //清除cookie
        res.clearCookie('connect.sid');
        //发送响应
        res.status(200).send({
            code : 200,
            msg : '用户退出成功'
        })
    })
}