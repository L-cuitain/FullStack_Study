//引入数据库连接池
const pool = require('../config/dbconfig');

//#region 通过筛选文章后 进行分页查询所有文章
module.exports.findPaging = (option) => {
    //筛选条件
    let status = option.status || null; //文章状态
    let category = option.category || null; //文章分类
    //分页数据
    let offset = option.offset || 0; //页数
    let size = option.size || 5; //一页数据的数量
    //回调函数
    let callback = option.callback || null;

    //书写sql语句
    //查询分类表中的 id 和 分类名称 SELECT id cate_id , NAME cate_name FROM categories;
    //查询不同筛选条件下 的数据总数 SELECT COUNT(*) total FROM posts p WHERE category_id = 获取到的id AND status = 获取到的状态
    //查询不同筛选条件下文章信息  SELECT p.* , u.nickname , c.name FROM posts p INNER JOIN users u ON p.user_id = u.id INNER JOIN categories c ON p.category_id = c.id WHERE category_id = 获取到的id AND status = 获取到的状态
    let csql = `SELECT id cate_id , NAME cate_name FROM categories; SELECT COUNT(*) total FROM posts p`;
    let sql = `;SELECT p.* , u.nickname , c.name FROM posts p INNER JOIN users u ON p.user_id = u.id INNER JOIN categories c ON p.category_id = c.id`;

    //判断筛选情况
    if (!status && category) { // 有分类  无状态
        csql += ` WHERE category_id = ${category} `;
        sql += ` WHERE category_id = ${category} `;
    } else if (!category && status) { //无分类  有状态
        csql += ` WHERE p.status = '${status}' `;
        sql += ` WHERE p.status = '${status}' `;
    } else if (category && status) { //有分类  有状态
        csql += `WHERE p.status = '${status}' AND category_id = '${category}' `;
        sql += ` WHERE p.status = '${status}' AND category_id = '${category}' `;
    }

    sql += `LIMIT ${offset} , ${size} `;
    //拼接sql语句
    csql += sql;

    //查询数据
    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    });
}
//#endregion


//#region 通过id查询文章信息
module.exports.findOne = (id, callback) => {
    let sql = 'SELECT id cate_id , NAME cate_name FROM categories;SELECT `status` FROM posts GROUP BY `status`;SELECT * FROM posts WHERE id=' + id;

    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    })
}

//#endregion


//#region 修改数据
module.exports.updateOne = (object, callback) => {
    let {
        id,
        slug,
        title,
        feature,
        created,
        content,
        status,
        category
    } = object;

    let sql = `update posts set slug = '${slug}' , title = '${title}' , feature = '${feature}' , create = '${created}' , content = '${content} , status = '${status}' , category = '${category}' WHERE id = '${id}'`;

    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    })
}
//#endregion


//#region 获取文章分类和文章状态信息
module.exports.findCategoryAndStatus = (callback) => {
    let sql = 'SELECT id AS cate_id,slug, NAME AS cate_name FROM categories;SELECT `status` FROM posts GROUP BY `status`'

    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    });
}
//#endregion


//#region 添加数据
module.exports.insertOne = (data, callback) => {
    let {
        slug,
        title,
        feature,
        created,
        content,
        status,
        user_id,
        category
    } = data;
    let sql = `INSERT INTO posts(
    slug,
    title,
    feature,
    created,
    content,
    status,
    user_id,
    category_id
  ) VALUES(?,?,?,?,?,?,?,?)`;

    pool.query(sql, [slug, title, feature, created, content, status, user_id, category], function (error, results) {
        if (error) throw error;
        callback(results);
    });
}
//#endregion

//#region 添加分类
module.exports.insertCate = (slug, cateName, callback) => {
    let sql = 'INSERT INTO categories(slug, name)VALUES(?,?)'
    pool.query(sql, [slug, cateName], function (error, results) {
      if (error) throw error;
      callback(results);
    });
  }
//#endregion



//#region 通过id删除文章
module.exports.deleteOne = (id, callback) => {
    let sql = `UPDATE posts SET status ="transhed" WHERE id = ${id}`
    pool.query(sql, function (error, results) {
      if (error) throw error;
      callback(results);
    });
  }
//#endregion

