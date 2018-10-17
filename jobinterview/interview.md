## 1.使用JS如何检测一个变量是String类型?
```
typeof(obj) === 'string';
typeof obj === "string";
obj.constructor === String;
```

## 2.js的数据类型 [参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
7种数据类型
6种原始类型
* Boolean
* Null
* Undefiend
* Number
* String
* Symbol (ES6新定义) (ECMAScript6)
和Object


## 3.怎样使用js去掉字符串空格？
```
* 方法一： str.trim() 只去掉两边的空格
* 方法二：str.replace(/\$*/g, "") 去掉全部空格
* 方法三：使用jquery $.trim() // 去掉两边空格
```

## 4， 你如何获取URL中查询字符串中的参数？
```
* 方法1
function getUrl(){
    const sUrl = window.location.href;
    const arrPath = sUrl.split("?");
    if(arrPath[0] === sUrl){
        return "";
    };
    const arrSearch = arrPath[1].split("&");
    let needSearch = {};
    for(let i = 1; i < arrSearch.length; i++){
        const aItems = arrSearch[i].split("=");
        needSearch[aItems[0]] = aItems[1];
    }
    return needSearch;
}

var href = getUrl();
console.log(href["name"]);

* 方法2-简洁
[参考](https://segmentfault.com/q/1010000005648982)

function getQuery(name){

}

```
