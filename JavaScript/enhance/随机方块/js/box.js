function Box(parent, operation) {
    this.color = operation.color;
    this.width = operation.width;
    this.height = operation.height;
    this.x = operation.x;
    this.y = operation.y;

    this.div = document.createElement('div');
    this.parent = parent;
    parent.append(this.div);

    //初始化样式
    this.init();
}

Box.prototype.init = function () {
    this.div.style.position = 'absolute';
    this.div.style.backgroundColor = this.color;
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';
    this.div.style.top = this.y + 'px';
    this.div.style.left = this.x + 'px';
};


Box.prototype.random = function () {
    this.div.style.left = Tools.getRandomNum(0, this.parent.offsetWidth / this.width - 1) * this.width + 'px';
    this.div.style.top = Tools.getRandomNum(0, this.parent.offsetHeight / this.height - 1) * this.height + 'px';
};

