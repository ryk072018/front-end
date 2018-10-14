// ES6模块
import { stat, exist, readFile } from 'fs'; // 表示从fs模块加载三个方法，其他方法不加载；
// 这种加载称为静态加载或编译时加载；好处是可以扩宽javascript语法；

// 模块功能主要有两个命令构成；export,import;

// export命令规定模块对外的接口；
// import命令用于输入其他模块提供的功能；

// 使用方法；
// profiles.js
// 一个模块就是一个独立文件；如果需要外部读取模块内部的某个变量，必须使用export命令输出该变量；
// 写法1 -----
export var firstName = 'kk';
export var lastName = 'yt';
export var year = 1994;
// 写法2---
var firstName = 'kk';
var lastName = 'yt';
var year = 1994;
export { firstName, lastName, year };

// export 可以到处变量、函数、对象
export function fn1(x, y) {
    return y * x;
}

// export输出的变量可以使用as重命名；
export {
    fn1 as streamFn1
}

// 注意 ->输出一个函数
function fn2() { };
export { fn2 };
// ->输出一个变量；
var i = 1;
export { i };

// 使用export获取模块内变量的实时的值；
export var foo = "qqq";
setTimeout(() => foo = "www", 500); // 表示输出变量foo,500毫秒之后变为www;