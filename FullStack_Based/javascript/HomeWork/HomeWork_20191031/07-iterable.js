let arr = [1,3,4,5,3];

for(let key of arr){

    console.log(key);
}

for(let item of arr.entries()){
    console.log(item);
}

let set = new Set(['a','b','f','e']);

for(let item of set.entries()){
    console.log(item);
}


let map = new Map([
    ['a',1],
    ['b',2],
    ['f',4]
])

for(let item of map.entries()){
    console.log(item);
}