<<<<<<< HEAD
//3. 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。

//方式一
for(let i = 1 ; i <= 30 ; i++){
    if(i == 4 || i == 7 || i == 14 || i == 18 || i == 24){
        continue;
    }

    console.log(i);
    
}

// 方式二
// let arr = [4,7,14,18,24];

// let count = 0;

// for (let i = 1; i <= 30; i++) {

//     if (arr[count] == i) {
//         count++;
//         continue;
//     }
//     console.log(i);
=======
//3. 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。

//方式一
for(let i = 1 ; i <= 30 ; i++){
    if(i == 4 || i == 7 || i == 14 || i == 18 || i == 24){
        continue;
    }

    console.log(i);
    
}

//方式二
// let arr = [4,7,14,18,24];

// let count = 0;

// for (let i = 1; i <= 30; i++) {

//     if (arr[count] == i) {
//         count++;
//         continue;
//     }
//     console.log(i);
>>>>>>> fcfc4cf8d62a9925da61ad8ce4841b0825f17668
// }