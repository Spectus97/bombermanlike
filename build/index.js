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
                this.img = new Image();
                if (this.type == 0) {
                    this.img.src = "build/assets/img/sol.png";
                }
                else if (this.type == 1) {
                    this.img.src = "build/assets/img/paille.png";
                }
                else if (this.type == 2) {
                    this.img.src = "build/assets/img/bois.png";
                }
                else if (this.type == 3) {
                    this.img.src = "build/assets/img/eau_vertical.png";
                }
                else if (this.type == 4) {
                    this.img.src = "build/assets/img/eau_horizontale.png";
                }
                else if (this.type == 5) {
                    this.img.src = "build/assets/img/eau_coin_bas_droit.png";
                }
                else if (this.type == 6) {
                    this.img.src = "build/assets/img/eau_coin_bas_gauche.png";
                }
                else if (this.type == 7) {
                    this.img.src = "build/assets/img/eau_coin_haut_gauche.png";
                }
                else if (this.type == 8) {
                    this.img.src = "build/assets/img/eau_coin_haut_droit.png";
                }
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
                this.width = Math.floor(canvas.offsetWidth / 26);
                this.height = Math.floor(canvas.offsetHeight / 26);
                this.initBoard();
                this.drawOnCanvas();
            }
            Map.prototype.initBoard = function () {
                this.board = [];
                this.defaultMap = [[7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                    [6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5]];
                for (var i = 0; i < this.height; i++) {
                    this.board[i] = [];
                    for (var j = 0; j < this.width; j++) {
                        this.board[i][j] = new component.Cell(this.defaultMap[i][j]);
                    }
                }
            };
            Map.prototype.boardToString = function () {
                var txt = "[";
                for (var i = 0; i < this.height; i++) {
                    txt += "[";
                    for (var j = 0; j < this.width; j++) {
                        if (j != (this.width - 1))
                            txt += this.board[i][j].type + ",";
                        else
                            txt += this.board[i][j].type;
                    }
                    if (i != (this.height - 1))
                        txt += "],";
                    else
                        txt += "]";
                }
                return txt + "]";
            };
            Map.prototype.drawOnCanvas = function () {
                for (var i = 0; i < this.height; i++) {
                    for (var j = 0; j < this.width; j++) {
                        this.ctx.drawImage(this.board[i][j].img, j * this.board[i][j].width, i * this.board[i][j].height, this.board[i][j].width, this.board[i][j].height);
                    }
                }
            };
            return Map;
        }());
        component.Map = Map;
    })(component = project.component || (project.component = {}));
})(project || (project = {}));
var project;
(function (project) {
    var models;
    (function (models) {
        var Directions;
        (function (Directions) {
            Directions[Directions["Up"] = 0] = "Up";
            Directions[Directions["Down"] = 1] = "Down";
            Directions[Directions["Left"] = 2] = "Left";
            Directions[Directions["Right"] = 3] = "Right";
        })(Directions = models.Directions || (models.Directions = {}));
    })(models = project.models || (project.models = {}));
})(project || (project = {}));
