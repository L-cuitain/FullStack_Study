//引入数据库查询
const {
    findPaging,
    findOne,
    updateOne,
    findCategoryAndStatus,
    insertOne,
    deleteOne
} = require('../models/adminPostsModel');

//引入日期对象
const moment = require('moment');

//#region 显示文章管理页面
module.exports.postsPage = (req, res) => {
    let pagesize = 5;
    let pagenum = 1;
    findPaging(0, 5, function (results) {
        //发送响应
        res.render('./admin/posts', {
            title: "后台管理系统-文章",
            data: results[0],
            total: results[1][0].total,
            pagenum: pagenum,
            pagesize: pagesize,
            totalpage: Math.ceil(results[1][0].total / pagesize)
        });
    })
}
//#endregion


//#region 筛选分页查询所有文章
module.exports.postsByFilter = (req,res) => {
    let { pagenum , pagesize , category , status } = req.query;

    findByPaging({
        category,
        status,
        offset : (pagenum - 1) * pagesize,
        size : pagesize,
        callback(results) {
            res.send({
                code : 200,
                message : '查询数据成功',
                //分页数据
                pagenum : parseInt(pagenum),
                pagecount : Math.ceil(parseInt(results[1][0].total / pagesize)),
                //文章数据
                data : results[2]
            });
        } 
    })
}
//#endregion

//#region 显示文章添加页面
module.exports.postsAddPage = (req,res) => {
    findCategoryAndStatus(function (results){
        res.render('./admin/post-add',{
            title : '后台管理系统-文章添加',
            category : results[0],
            statusArr : results[1]
        })
    })
}
//#endregion


//#region 添加数据
module.exports.postAdd = (req,res) => {
    //获取数据
    let { title , content , slug , category , created , status } = req.body;

    //获取上传的图片
    let feature = req.file ? `/uploads/${req.file.filename}` : `/uploads/default.png`;
    //判断是否存在slug
    if(!slug){
        slug = new Date().valueOf();
    }
    if(!created){
        created = moment.format("YYYY-MM-DD HH:mm:ss");
    }

    let postsData = {
        slug : slug,
        title : title,
        feature : feature,
        created : created,
        content : content,
        status : status,
        user_id : req.session.user.id,
        category : category
    }

    insertOne(postsData,function(results){
        if(results){
            res.send({
                code : 200,
                message : '文章添加成功'
            })
        }
    })
}
//#endregion

//#region 删除文章
module.exports.postsDel = (req, res) => {
    // console.log(req.body);
    let { id } = req.body;
    // let id = 1;
    deleteOne(id, function (results) {
      // console.log(results);
      if (results.affectedRows == 1) {
        res.send({
          code: 200,
          message: "文章删除成功"
        })
      } else {
        res.send({
          code: 500,
          message: "文章删除失败"
        })
      }
    });
  
  }
//#endregion

//#region 获取文章分类
module.exports.postsCategoryPage = (req,res) => {
    
}
//#endregion

//#region 回显文章
module.exports.postsEditPage = (req, res) => {
    //获取文章id
    let {
        id
    } = req.params;
    findOne(parseInt(id), function (results) {
        res.render('./admin/post-edit', {
            title: '后台管理系统-文章编辑',
            category: results[0],
            statusArr: results[1],
            data: results[2]
        });
    })
}
//#endregion


//#region 更新文章
module.exports.postsEdit = (req, res) => {
    let updateObj = {
        id: parseInt(req.body.id),
        slug: req.body.slug,
        title: req.body.title,
        feature: req.file ? `/uploads/${req.file.filename}` : null,
        created: req.body.created,
        content: req.body.content,
        status: req.body.status,
        // user_id: req.session.user.id, // user_id是作者id 修改文章不需要更改作者id
        category: req.body.category
    }

    updateOne(updateObj,function(results){
        if(results.affectedRows == 1){
            res.send({
                code : 200,
                message : "文章更新成功"
            })
        }
    })
}
//#endregion

//#region 获取分类数据
module.exports.postsFindCategory = (req, res) => {
    findCategoryAndStatus(function (results) {
      res.send({
        code: "200",
        message: "获取分类数据成功",
        category: results[0]
      });
    })
  }
//#endregion



//#region 添加文章分类数据
module.exports.postsAddCategory = (req, res) => {
    let { slug, name } = req.body;
    // console.log(slug, name);
    insertCate(slug, name, function (results) {
      // console.log(results);
      if (results.affectedRows == 1) {
        res.send({
          code: "200",
          message: "分类添加成功",
        });
      }
    })
  }
//#endregion


//#region 删除分类
module.exports.postsDeleteCategory = (req, res) => {
    // 获取前端传来的id
    let { id } = req.body;
  
    deleteCate(id, function (results) {
      res.send({
        code: 200,
        message: "分类删除成功"
      })
    })
  
  }
//#endregion





