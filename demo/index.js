var arr = [0, 2, 3, 4, 4, 0, 2];
var obj = {};
var tmp = [];
for (var i = 0; i < arr.length; i++) {
    console.log(obj[arr[i]]);
    if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
        tmp.push(arr[i]);
    }
}
console.log(tmp);