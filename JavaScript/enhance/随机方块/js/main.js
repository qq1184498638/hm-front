var box = document.getElementById('container');
var arr = [];
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandomNum(0, 255);
    var g = Tools.getRandomNum(0, 255);
    var b = Tools.getRandomNum(0, 255);
    var color = "rgb(" + b + ", " + g + ", " + b + ")";
    var operation = {
        color: color,
        width: '20',
        height: '20',
        x: '100',
        y: '100'
    }
    arr.push(new Box(box, operation));
}

function intervalBox() {
    arr.forEach(function (b) {
        b.random();
    });
}

intervalBox();
setInterval(intervalBox, 800);


