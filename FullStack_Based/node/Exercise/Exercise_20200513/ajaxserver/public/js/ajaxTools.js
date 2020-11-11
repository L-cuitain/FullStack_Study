//封装 ajax

/**
 * 
 * @param {String} type  请求方式(GET POST PUT DELETE) 
 * @param {String} url   请求地址
 * @param {String} data   请求数据
 * @param {function} success   请求成功后的回调函数
 */
function ajax(type,url,data,success){
    //1.实例化xhr对象
    let xhr = new XMLHttpRequest();
    
    //2.设置请求数据
    //如果是get请求 拼接数据
    if(type == 'GET'){
        url = url + '?' + data;
        data = null;
    }

    xhr.open(type,url);
    //如果是post请求  设置请求头
    if(type == 'POST'){
        //判断是否为json数据
        if(data.startsWith('{') && data.endsWith('}')){
            xhr.setRequestHeader('Content-Type','application/json');
        }else{
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        }
    }

    //3.发送请求数据
    xhr.send(data);

    //4.监听并处理响应
    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4){
            success(xhr.responseText);
        }
    }
}