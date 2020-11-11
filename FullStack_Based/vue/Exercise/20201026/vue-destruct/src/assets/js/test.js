//导出 变量 和 方法
//变量
let a = 10;
// let b = 20;
// let c = 30;

// export {a , b , c};

//方法
let add = function (x,y){
    return x + y;
} 

let sub = function(x,y){
    return x - y;
}

//export 不能导出为一整个对象
//把对象的名字定义为default 
export default {"num" : a , "add" : add , "sub" : sub};