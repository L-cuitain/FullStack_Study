//封装ajax 进阶
let $ = {
    //把前端的对象变成 key=value&key1=vlaue1的形式
    /**
     * 
     * @param {Object} dataObj 
     */
    param : function(dataObj){
        
        //拼接字符串
        let dataStr = '';
        for (let i in dataObj) {
            dataStr += i + '=' + dataObj[i] + '&';
        }

        //删除多出来 的 &符号
        dataStr = dataStr.slice(0,-1);
        
        return dataStr;
    },  
    
    /**
     * 
     * @param {Object} options 
     */
    ajax: function(options) {
        //定义ajax的具体四个参数
        //请求方式
        let type = options.type || 'GET';
        //请求地址
        let url = options.url || '';
        //请求参数
        let data = this.param(options.data || {});
        //成功时的回调函数
        let success = options.success || null;

        //1.实例化xhr对象
        let xhr = new XMLHttpRequest();

        //2.设置请求数据
        //如果是get请求 拼接数据
        if (type == 'GET') {
            url = url + '?' + data;
            data = null;
        }

        xhr.open(type, url);
        //如果是post请求  设置请求头
        if (type == 'POST') {
            //判断是否为json数据
            if (data.startsWith('{') && data.endsWith('}')) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            } else {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
        }
        
        //3.发送请求数据
        xhr.send(data);

        //4.监听并处理响应
        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {                
                success(xhr.responseText);
            }
        }
    }
}