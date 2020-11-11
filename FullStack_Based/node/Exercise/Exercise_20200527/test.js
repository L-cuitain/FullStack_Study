//引入mongoose包
const mongoose = require('mongoose');

//使用mongoose的connect方法来连接数据库
mongoose.connect('mongodb://localhost/my_database_1', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    });


// let userSchema = new mongoose.Schema({
//     //字段:数据类型
//     username: String,
//     password: String,
//     address: String,
//     hobbies: Array
// })


//创建数据集合规则
let memberSchema = new mongoose.Schema({
    //id
    id : Number,
    // 姓名
    name: String,
    //图片路径 
    avatar : String,
    // 备注
    bio: String,
    // 创建时间
    created : String
})

//应用规则
let Member = mongoose.model('member', memberSchema);

//添加数据
// Member.create({
//     id : 1,
//     name : 'Scott Lewis',
//     avatar : '/upload/icon-01.png',
//     bio : 'Ucypli rddfbydc vcsw peanr hfnmcwfi dlqnfur mukydvojs xxscbfsj elgqnhz',
//     created : '1999-02-18T06:21:59.220Z',
// },{
//     id : 2,
//     name : 'Brian Allen',
//     avatar : '/upload/icon-01.png',
//     bio : 'Qcqq prbj xwzat jvep ideebrm nzlce uonqf slbbo tbknb kngj fxfn uidhdoi',
//     created : '2003-09-09T11:56:26.220Z',
// },{
//     id : 3,
//     name : 'Donald Wilson',
//     avatar : '/upload/icon-01.png',
//     bio : 'Mpbts smpur rqvxaksf yoe ljyer vyotpigw tqbdj fcy twizr lkkhopewmd hvl',
//     created : '2016-02-24T11:14:14.220Z',
// })


//查询数据库中所有数据
// Member.find().then((data) => {console.log(data);})

//查询 指定 id 的数据
// Member.find({ id : 2}).then((data) => {console.log(data);});

//查询 数组中 含有 某字段值 的数据
// Member.find({name: { $in : ['滑稽']}}).then((data) => {console.log(data);});

//查询 id 大于 1 小于 3 之间的数据
// Member.find({ id : {$gt : 1 , $lt : 3}}).then((data) => {console.log(data);});

//查询 所有数据 按指定的属性升序排列
// Member.find().sort('id').then((data) => {console.log(data);});

//查询 所有数据 按指定的属性降序排列
// Member.find().sort('-id').then((data) => {console.log(data);});

//分页 查询数据 skip跳过个数  limit获取个数
// Member.find().skip(2).limit(2).then((data) => {console.log(data);});

//根据字段查询
// Member.find().select('name created').then((data) => {console.log(data);});

//查询单条数据
// Member.findOne({name: 'Scott Lewis'}).then((data) => {console.log(data);});

//删除 指定数据 并返回 删除完成的数据 findOneAndDelete
// Member.findOneAndDelete({_id : '5ecdc92635d1e3161c1ddc29'}).then((data) => {console.log(data);});

//删除多条数据 deleteMany  n:数据库中数据的条数  deletedCount: 成功删除的条数11
// Member.deleteMany({}).then((data) => {console.log(data);});

//修改单条数据  updateOne({查找条件},{修改的数据})  返回 n:找到数据的条数  nModified:修改了数据的条数  ok:修改成功
Member.updateOne({ _id : '5ecdd0f23db385461c0a827f'},{
    //修改的值
    id : 1,
    name : '滑稽'
}).then((data) => {console.log(data);});