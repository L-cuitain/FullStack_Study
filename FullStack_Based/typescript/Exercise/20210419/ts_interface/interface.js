var CrazyClass = /** @class */ (function () {
    function CrazyClass(hello) {
        this.hello = hello;
    }
    return CrazyClass;
}());
var crazy = new CrazyClass(421);
console.log(crazy.hello);
var fun = function (x, y) {
    console.log(x + " " + y);
};
fun('张三', 123);
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.behavior = function () {
        console.log(this.name + " " + this.age);
    };
    return Cat;
}());
var cat = new Cat("李四", 123);
cat.behavior();
