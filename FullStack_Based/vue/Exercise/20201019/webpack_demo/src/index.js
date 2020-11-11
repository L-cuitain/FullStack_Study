import _ from "lodash";
import './style.css';

let str = "我是火车王";


var element = document.createElement('div');
element.innerHTML = _.join(['hello','webpack'],' ');
element.classList.add('main');
document.body.appendChild(element);

console.log(str);