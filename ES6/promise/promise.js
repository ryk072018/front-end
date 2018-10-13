// 创造一个Promise实例；
const promise = new Promise((resolve, reject) => {

    // some code;

    if (i = "异步函数调用成功") {
        resolve(value);
    } else {
        reject(error);
    }
});

// 使用promise的then方法；函数一：Promise对象状态为resolve时调用；函数二：是状态为reject时调用；
promise.then(val => {
    console.log(val)
}, err => {
    console.log(err);
});

// Promise对象的简单例子；
function timeOut(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "code");
    })
};
timeOut(100).then(val => {
    console.log(val);
})
