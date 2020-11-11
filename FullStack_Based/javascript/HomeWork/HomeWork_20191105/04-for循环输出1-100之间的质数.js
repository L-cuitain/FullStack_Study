// //4. 利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）



// 使用双重for循环实现

for (let i = 2; i <= 100; i++) {

    for (let j = 2; j <= 100; j++) {

        if (i % j == 0 && i != j) {
            break;
        }

        if (i % j == 0 && i == j) {

            console.log(i);
        }
    }
}