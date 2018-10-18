## 1. 使用JS如何检测一个变量是String类型?
```
typeof(obj) === 'string';
typeof obj === "string";
obj.constructor === String;
```

## 2. js的数据类型 [参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
7种数据类型
6种原始类型
* Boolean
* Null
* Undefiend
* Number
* String
* Symbol (ES6新定义) (ECMAScript6)
和Object


## 3. 怎样使用js去掉字符串空格？
```
* 方法一： str.trim() 只去掉两边的空格
* 方法二：str.replace(/\s*/g, "") 去掉全部空格
* 方法三：使用jquery $.trim() // 去掉两边空格
```

## 4. 你如何获取URL中查询字符串中的参数？
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
## 5. js常用字符串操作函数；
[参考](http://www.w3school.com.cn/jsref/jsref_obj_string.asp)

* split();
* replace();
* trim();
* toUpperCase()
* toLowerCase()
* length
* 没有使用过的
  
问题和使用

?怎样把一个字符串反转过来
```
funciton reverseString(str){
    return str.split("").reverse().join("");
};

总结：实现一个功能比单纯记忆知识要点更有成就感；
```
 ?怎样把"ryk"和"gyt"两个字符串拼接起来
```
const str = "ryk";
str.concat("gyt");
// rykgyt;
```

?你怎样使用indexOf()
```
var str = "Hello World";
str.indexOf("Hello"); // 0
str.indexOf("Hi"); // -1
str.indexOf("World"); // 6 
indexOf()返回指定字符串出现的位置；
``` 

? sbustr()和sbustring()的区别；
```
var str = "rykgyt";
str.substr(1); // ykgyt
str.substr(2,2); // kg
str.substring(2,4); // kg (不包含第四位)
str.substring(2); // kgyt
学会使用基础知识，可以快速高效的完成产品需求；
工作效率=工作量/工作时间；
```

？怎样使用match()
```
var str = "heyy gyt";
str.match("gyt"); // gyt
str.march("ryk"); // null

例二
var str = '1 Monday 2 Tuesday 3 Wednesday';
str.match(/\d+\g); // 1,2,3
```

? slice()怎么使用
```
var str = 'hello happy world';
str.slice(6); // happy world
str.clice(6,11); // happy (不包含第11位);
```
? search() 使用方法
```
const str = 'heyy gyt';
str.search("ryk"); // -1 -> 没有找到任何匹配 返回-1
str.search("gyt"); // 5 -> 返回第一个与regexp匹配的子串的起始位置；
```

## 6. 怎样创建，添加，删除，移动，插入，
