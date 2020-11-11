//引入joi模块
const joi = require("joi");

//校验
const schema = joi.object().keys({
    username : joi.string().min(5).max(25).required().error(new Error('请重新输入'))
})

const user = {
    username : '滑稽'
}

async function test(){
    try{
        console.log(await joi.validate(user,schema));
    } catch(err) {
        console.log(err.message);
    }
}

test();