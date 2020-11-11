let date = new Date();
let year = date.getFullYear();

console.log(getRYear(year));

function getRYear(year){
    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        return '是闰年';
    }

    return '不是闰年';
}

