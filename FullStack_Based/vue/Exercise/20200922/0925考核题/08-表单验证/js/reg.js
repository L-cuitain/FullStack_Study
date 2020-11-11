window.onload = function () {
    //获取元素
    let telIpt = document.querySelector('#tel');
    let qqIpt = document.querySelector('#qq');
    let ncIpt = document.querySelector('#nc');
    let msgIpt = document.querySelector('#msg');
    let pwdIpt = document.querySelector('#pwd');
    let surepwdIpt = document.querySelector('#surepwd');


    //书写正则表达式校验规则
    let telRex = /^1[3|5|7|8]\d{9}$/;
    let qqRex = /^\d{4,11}$/;
    let ncRex = /^[\u4e00-\u9fa5]{2,8}$/;
    let msgRex = /^\d{6}$/;
    let pwdRex = /^[a-zA-Z0-9-_]{6,16}$/;

    //创建方法  在鼠标移出文本框后显示校验结果
    function getResult(ipt, regxp) {
        //创建移出域事件
        ipt.onblur = function () {
            //获取value值
            let value = ipt.value;

            if (regxp.test(value)) {
                //显示类
                this.nextElementSibling.addClass = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您 校验成功'
            } else {
                this.nextElementSibling.addClass = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 校验失败 请重新输入'
            }
        }
    }

    //调用方法
    getResult(telIpt, telRex);
    getResult(qqIpt, qqRex);
    getResult(ncIpt, ncRex);
    getResult(msgIpt, msgRex);
    getResult(pwdIpt, pwdRex);


    //创建 确认密码的移出域事件
    surepwdIpt.onblur = function () {
        //判断 value值
        if (surepwdIpt.value == pwdIpt.value) {
            this.nextElementSibling.addClass = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您 校验成功'
        } else {
            this.nextElementSibling.addClass = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 密码错误 请重新输入'
        }
    }
}