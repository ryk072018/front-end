"use strict";
// 这是我们的玩家要躲避的敌人 
var Enemy = function (x, y, speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
    this.x = x; // x轴坐标
    this.y = y; // y轴坐标
    this.speed = speed; // 速度
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function (dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    /**
     *  Enemy对象x轴坐标大于500初始化为-100
     *  小于500是向右运动
     */
    if (this.x > 500) {
        this.x = -100;
    } else {
        this.x += this.speed * dt;
    };
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
class Player {
    constructor(s, x, y) {
        // this.sprite = 'images/char-boy.png';
        this.sprite = s;
        this.x = x;
        this.y = y;
    }
    update() {
        checkCollisions();
        if (this.y < 8) {
            winAnimation();
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // 操作玩家上下左右移动并且不超过一定范围
    handleInput(e) {
        if (e == 'left' && this.x > 30) {
            this.x = this.x - 100;
        } else if (e == 'right' && this.x < 350) {
            this.x = this.x = this.x + 100;
        } else if (e == 'up' && this.y > 7) {
            this.y = this.y - 40;
        } else if (e == 'down' && this.y < 400) {
            this.y = this.y + 50;
        } else {
            return false;
        }
    }
    // 重置玩家位置
    reset() {
        this.x = 200;
        this.y = 400;
    }
}

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
// let enemy1 = new Enemy(-60, 60, 150);
// let enemy2 = new Enemy(-70, 145, 300);
// let enemy3 = new Enemy(-60, 230, 100);
// const allEnemies = [enemy1, enemy2, enemy3];

// 使用for循环和随机数创建多个enemy实例；
const allEnemies = [];
for (let i = 0; i < 6; i++) {
    let x = Math.random() * -10 - 60;
    let y = Math.random() * 170 + 60;
    let speed = Math.random() * 200 + 100;
    let enemy = new Enemy(x, y, speed);
    allEnemies.push(enemy);
}
let player = new Player('images/char-boy.png', 200, 400);

// 检测玩家与敌人碰撞，碰撞后返回起点
function checkCollisions() {
    allEnemies.forEach(function (enemy) {
        if (Math.abs(player.x - enemy.x) < 40 && Math.abs(player.y - enemy.y) < 40) {
            player.reset();
        }
    });
}
// 玩家获胜后执行的动画
function winAnimation() {
    setTimeout(() => {
        player.reset();
    }, 3000);
}

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});