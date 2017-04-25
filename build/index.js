var project;
(function (project) {
    var Game = (function () {
        function Game(canvas) {
            this.layerMap = new project.component.Map(canvas);
        }
        Game.prototype.run = function () {
            var _this = this;
            setInterval(function () {
                _this.layerMap.drawOnCanvas();
            }, 1000 / 60);
        };
        return Game;
    }());
    project.Game = Game;
})(project || (project = {}));
window.onload = function () {
    var canvasMapLayer = document.getElementById("layerDecor");
    var game = new project.Game(canvasMapLayer);
    game.run();
};
var project;
(function (project) {
    var component;
    (function (component) {
        var Cell = (function () {
            function Cell(type) {
                this.width = 26;
                this.height = 26;
                this.type = type;
                this.img = "";
            }
            return Cell;
        }());
        component.Cell = Cell;
    })(component = project.component || (project.component = {}));
})(project || (project = {}));
var project;
(function (project) {
    var component;
    (function (component) {
        var Map = (function () {
            function Map(canvas) {
                this.canvas = canvas;
                this.ctx = canvas.getContext("2d");
                this.width = (canvas.offsetWidth / 19);
                this.height = (canvas.offsetHeight / 19);
                this.initBoard();
                this.drawOnCanvas();
            }
            Map.prototype.initBoard = function () {
                this.board = [];
                for (var i = 0; i < this.height; i++) {
                    this.board[i] = [];
                    for (var j = 0; j < this.width; j++) {
                        this.board[i][j] = new component.Cell(Math.floor(Math.random() * 2));
                    }
                }
                console.log("map crée avec [" + this.width + "][" + this.height + "]");
            };
            Map.prototype.drawOnCanvas = function () {
                for (var i = 0; i < this.height; i++) {
                    for (var j = 0; j < this.width; j++) {
                        var img = new Image();
                        var img2 = new Image();
                        img.src = "build/assets/img/sol.png";
                        this.ctx.drawImage(img, j * this.board[i][j].width, i * this.board[i][j].height, this.board[i][j].width, this.board[i][j].height);
                        if (this.board[i][j].type == 1) {
                            img2.src = "build/assets/img/arbuste.png";
                            this.ctx.drawImage(img2, j * this.board[i][j].width, i * this.board[i][j].height, this.board[i][j].width, this.board[i][j].height);
                        }
                    }
                }
            };
            return Map;
        }());
        component.Map = Map;
    })(component = project.component || (project.component = {}));
})(project || (project = {}));
//# sourceMappingURL=index.js.map