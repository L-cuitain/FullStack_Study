//引入fs模块
const fs = require('fs');
//引入path模块
const path = require('path');
//引入json文件
const database = require('./backup.json');

//将模块引入到app.js中
module.exports = {
     get : () => {
        return database;
     },
 
     add : (member) => {
        //将member添加到database数组中
        database.unshift(member);

        //将database转换为json字符串
        let json = JSON.stringify(database);
        
        //通过fs重新写入json文件中
        fs.writeFileSync(path.join(__dirname,'backup.json'),json);

        return true;
    },

    getMember : (id) => {
       //遍历database
       return database.find((item) => {
          return item.id === id;
       })
    }
}