// js生成实力对象的简单方法
function point(x, y) {
    this.x = x;
    this.y = y;
}
point.prototype.toString = function () {
    return 'heyy' + this.x + 'girl' + this.y + 'boy';
}
var p = new point(1, 2);

// es6语法；
class point {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
    }
    toString() {
        return 'heyy' + this.x + 'girl' + this.y + 'boy';
    }
}
