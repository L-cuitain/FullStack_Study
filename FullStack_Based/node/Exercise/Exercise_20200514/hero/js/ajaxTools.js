//封装ajax
//创建对象
let $ = {
    //设置param属性  将数据进行拼接和修改 
    /**
     * 
     * @param {Object} dataObj
     */
    param : function(dataObj){
        //创建变量 保存拼接字符串
        let dataStr = '';

        //遍历dataObj
        for(let i in dataObj){
            //拼接字符串
            dataStr += i + '=' + dataObj[i] + '&';
        }

        //将多余的字符删除
        dataStr = dataStr.slice(0,-1);
        
        return dataStr;
    },

    /**
     * 
     * @param {object} options 
     */
    ajax: function(options){
        //定义ajax四个参数
        //请求方式
        let type = options.type || 'GET';
        //请求地址
        let url = options.url || '';
        //请求参数
        let data = this.param(options.data || {});
        //请求成功的回调函数
        let success = options.success || null;

        //实例化 XMLHttpRequest对象
        let xhr = new XMLHttpRequest();

        //判断是否为get请求
        if(type == 'GET'){
            //拼接地址 和 参数
            url = url + '?' + data;
            data = null;
        }

        xhr.open(type,url);

        //判断是否为post请求
        if(type == 'POST'){
            //判断是否为json
            if(data.startsWith('{' && data.endsWith('}'))){
                xhr.setRequestHeader('Content-Type','application/json')
            }else{
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            }
        }

        //发送请求
        xhr.send(data);

        //监听 响应回来的内容
        xhr.onreadystatechange = () => {
            //判断状态码
            if(xhr.readyState == 4 && xhr.status == 200){
                success(xhr.responseText);
            }
        }
    }
}