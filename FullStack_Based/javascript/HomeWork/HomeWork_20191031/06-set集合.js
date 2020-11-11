// let arr = [1,3,4,2,5,2,3,4,1,4,2,3,2,3];


// let set = new Set(arr);

// console.log(set);

var set = new Set();

//属性 : size
//console.log(set.size);
//方法: 添加元素 add()

set.add(1);
set.add('a');
set.add(true);
set.add(undefined);
set.add(null);
set.add(1); // set不能出现重复元素  
console.log(set);

//方法: 判断有没有该元素 has()
console.log(set.has('a'));

//方法: 删除 delete()
console.log(set.delete(undefined));
console.log(set);

//方法: 清除 clear();
console.log(set.clear());
console.log(set);