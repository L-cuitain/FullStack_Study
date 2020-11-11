//封装ajax

//创建$对象
let $ = {
    //设置对象属性 param
    /**
     * 
     * @param {Object} dataObj 
     */
    param : (dataObj) => {
        //创建变量 存储拼接的字符串
        let dataStr = '';
        //遍历dataObj
        for(let i in dataObj){
            //拼接字符串
            dataStr += i + '=' + dataObj[i] + '&';
        }

        //删除字符串多余的内容
        dataStr = dataStr.slice(0,-1);
        
        //返回字符串
        return dataStr;
    },

    /**
     * @param {Object} options
     */
    ajax : (options) => {
        //获取参数
        //获取请求方式
        let type = options.type || 'GET';
        //获取请求地址
        let url = options.url || '';
        //获取请求数据
        let data = this.param(options.data || {});
        //获取成功后的回调函数
        let success = options.success;
        
        //实例化XMLHttpRequest对象
        let xhr = new XMLHttpRequest();

        //判断是否为GET请求
        if(type == 'GET'){
            //拼接地址
            url = url + '?' + data;
            data = null;
        }

        //设置请求方式 和 请求地址
        xhr.open(type,url);

        //判断是否为POST请求
        if(type == 'POST'){
            //判断是否为JSON对象
            if(data.startsWith('{') && data.endsWith('}')){
                //设置请求头
                xhr.setRequestHeader('Content-Type','application/json');
            }else{
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            }
        }

        //发送请求
        xhr.send(data);

        //监听响应的内容
        xhr.onreadystatechange = () => {
            success(xhr.responseText);
        }
    }
}