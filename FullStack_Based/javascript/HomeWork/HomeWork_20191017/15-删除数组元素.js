//15. 有一个数组，var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// 要求如下:
// 1.从第 0 位开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
// 2.从第 2 位开始删除 2 个元素
// 3.从第 1 位开始删除 0 个元素，插入“drum” 和 "guitar"

//分析:
//调用splice()方法 
//splice(起始位置,删除个数,添加的元素)


//步骤:
//定义数组
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];

//调用splice()方法 删除数组元素  并插入元素
// 1.从第 0 位开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
myFish.splice(0,1,"parrot","anemone","blue");

console.log(myFish);

// 2.从第 2 位开始删除 2 个元素
myFish.splice(2,2);

console.log(myFish);

// 3.从第 1 位开始删除 0 个元素，插入“drum” 和 "guitar"
myFish.splice(1,0,"drum","guitar");

console.log(myFish);

