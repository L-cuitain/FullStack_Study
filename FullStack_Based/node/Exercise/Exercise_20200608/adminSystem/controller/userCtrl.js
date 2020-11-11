//引入 user数据库表
const User = require('../model/user');

//引入 mongoose-sex-page模块
const mongooseSexPage = require('mongoose-sex-page');

//引入 joi 表单校验
const Joi = require('joi');

//引入 md5加密
const md5 = require('md5');

//导出
module.exports.showUser = (req, res) => {
    // console.log(req.session);
    if (req.session.username) {
        res.render('user');
    } else {
        res.redirect('/');
    }
}

module.exports.editUser = (req, res) => {
    if (req.session.username) {
        res.render('user-edit');
    } else {
        res.redirect('/');
    }
}


module.exports.findUsers = async (req, res) => {
    //获取到 浏览器传入的数据
    let {
        pageNum,
        pageSize
    } = req.query;

    //通过异步 查询数据库
    let users = await mongooseSexPage(User).page(parseInt(pageNum)).size(parseInt(pageSize)).display(5).find().exec();
    // console.log(users);

    //响应
    res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: users
    })
}

module.exports.deleteUser = async (req, res) => {
    //获取到浏览器传入的数据
    let {
        id
    } = req.query;

    //查询数据库  删除数据
    let result = await User.findOneAndUpdate({
        _id: id
    }, {
        status: false
    })


    //发送响应
    res.status(200).send({
        code: 200,
        msg: '用户删除成功',
        data: result.username
    })
}


module.exports.addUser = async (req, res) => {
    //使用Joi
    //进行后台表单校验
    //数据校验
    const schema = {
        username: Joi.string().min(3).max(20).required().error(new Error('用户名验证失败')),
        // 3 到 20 位 字母数字组合密码
        password: Joi.string().min(3).max(20).regex(/^[a-zA-Z0-9]+$/).error(new Error('密码验证失败')),
        email: Joi.string().email().required().error(new Error('邮箱验证失败')),
        role: Joi.string().valid("普通用户", "超级管理员").required().error(new Error('角色信息验证失败')),
        status: Joi.number().valid(1, 0).required().error(new Error('用户状态验证失败'))
    };

    //后端校验
    try {
        await Joi.validate(req.body, schema);
    } catch (error) {
        //状态码设置为 200  如果 为 4xx 5xx 浏览器会报异常
        return res.status(200).send({
            //用于 js 判断错误信息
            code: 400,
            msg: error.message
        })
    }

    //再次判断 数据库中是否存在 这个用户名 或 邮箱
    //查询数据库中的数据
    let resultUsername = await User.findOne({
        username: req.body.username
    });
    let resultEmail = await User.findOne({
        email: req.body.email
    })

    //判断数据是否存在
    if (resultUsername) {
        return res.send({
            code: 400,
            msg: '用户名已被占用'
        })
    }

    if (resultEmail) {
        return res.send({
            code: 400,
            msg: "邮箱已被占用"
        })
    }

    //创建新对象  储存用户信息
    let user = {
        username: req.body.username,
        password: md5(md5(md5(req.body.password))),
        email: req.body.email,
        role: req.body.role,
        status: req.body.status
    };

    //将数据添加到数据库中
    let successResult = await User.create(user);
    //判断successResult是否存在
    if (successResult.username) {
        //发送200响应
        res.status(200).send({
            code: 200,
            msg: '用户注册成功'
        })
    }
}


//回显
module.exports.getUser = async (req, res) => {
    //接受id
    let {
        id
    } = req.query;

    //从数据库中查询user对象
    let user = await User.findOne({
        _id: id
    });
    // console.log(user);

    //判断user是否为空
    res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: user
    })
}

//修改
module.exports.modifyUser = async (req, res) => {
    //获取user对象
    let user = req.body;

    //修改数据库User表
    let finalUser = await User.findOneAndUpdate({
        _id: user._id
    }, {
        username: user.username,
        email: user.email,
        password: user.password < 32 ? md5(md5(md5(user.password))) : user.password,
        role: user.role,
        status: user.status == '1' ? true : false,
    })

    //判断finalUser
    if (finalUser._id) {
        //响应给浏览器
        res.status(200).send({
            code: 200,
            msg: '数据修改成功',
        })
    }
}