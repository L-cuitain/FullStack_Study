//index.js处理members.json或backup.json文件 的 增加 删除 修改 查询

//引入fs包
const fs = require('fs');

//导入path包
const path = require('path');

//导入backup.json文件
const database = require('./backup.json');

//导出方法
module.exports = {
    get : () => {
        return database
    },

    add : (member) => {
        //将member对象添加到database对象中
        database.unshift(member);
        //将database转换成JSON字符串
        let json = JSON.stringify(database);

        //通过fs模块的写入文件将json写入到 /backup.json中
        fs.writeFileSync(path.join(__dirname,'backup.json'),json);
    },

    getId : (id) => {
        //遍历database获取到指定id的数据返回  数组.find()遍历 
        return database.find((item) => {
            //如果数组中元素中id和传入的id相同 则返回这个元素
            return item.id === id;
        })
    },
    
    deleteItem : (id) => {
        //从database中查询客户端传来的id是否存在
        let ids = database.find((item) => {
            return item.id === id;
        })

        //通过数组的splice方法将这条数据切割掉
        database.splice(database.indexOf(ids),1);
        //将database重新转换为JSON字符串
        let json = JSON.stringify(database);
        //通过fs模块重新将json覆盖到/backup.json中
        fs.writeFileSync(path.join(__dirname,'backup.json'),json);

        return 'ok';
    },

    getByPage : (last,limit) => {
        //遍历数组 找到数据中 和last一样的id数据
        const exist = database.find((item) => {item.id === last});

        //判断数据是否存在 如果存在 则查找这个数据指定的索引 没有则返回-1
        const skip = exist ? database.indexOf(exist) : -1;

        //切割database数组  返回指定索引的数据以及 索引后面的limit条数据
        return database.splice(skip+1,limit);
    }
}