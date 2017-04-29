var project;
(function (project) {
    var Game = (function () {
        function Game(canvas) {
            this.layerMap = new project.component.Map(canvas);
            this.p1 = new project.component.Player("p1");
            this.p2 = new project.component.Player("p2");
        }
        Game.prototype.run = function () {
            var _this = this;
            setInterval(function () {
                _this.layerMap.drawOnCanvas();
            }, 1000 / 30);
        };
        return Game;
    }());
    project.Game = Game;
})(project || (project = {}));
window.onload = function () {
    var canvasMapLayer = document.getElementById("layerDecor");
    var game = new project.Game(canvasMapLayer);
    game.run();
    game.p1.spawn(game.layerMap);
    game.p2.spawn(game.layerMap);
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
                else if (this.type == 20) {
                    this.img.src = "build/assets/img/singe_sprite.png";
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
            /**
             *  Init the map
             */
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
            /**
             * Constraints : 3 blocs type 0 min - cell.type = 0
             */
            Map.prototype.getCellsToDestroy = function (startPos) {
                var cellList = [];
                cellList.push(startPos); // Init with the start Pos , need 2 positions now
                if (this.cellIsAvaible(startPos)) {
                    // FIRST LEFT CELL
                    if (this.cellIsAvaible(new component.Position(startPos.x, startPos.y - 1))) {
                        cellList.push(new component.Position(startPos.x, startPos.y - 1));
                        if (cellList.length == 3)
                            return cellList;
                    }
                    // RIGHT
                    if (this.cellIsAvaible(new component.Position(startPos.x, startPos.y + 1))) {
                        cellList.push(new component.Position(startPos.x, startPos.y + 1));
                        if (cellList.length == 3)
                            return cellList;
                    }
                    // TOP
                    if (this.cellIsAvaible(new component.Position(startPos.x - 1, startPos.y))) {
                        cellList.push(new component.Position(startPos.x - 1, startPos.y));
                        if (cellList.length == 3)
                            return cellList;
                    }
                    // BOTTOM
                    if (this.cellIsAvaible(new component.Position(startPos.x + 1, startPos.y))) {
                        cellList.push(new component.Position(startPos.x + 1, startPos.y));
                        if (cellList.length == 3)
                            return cellList;
                    }
                }
                return null;
            };
            /**
             *  Return true if cell is sol / paille
             * @param pos
             */
            Map.prototype.cellIsAvaible = function (pos) {
                return (this.board[pos.x][pos.y].type == 0 || this.board[pos.x][pos.y].type == 1);
            };
            /**
             * return the current map to string format
             */
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
            /**
             *  Draw on canvas the current map
             */
            Map.prototype.drawOnCanvas = function () {
                for (var i = 0; i < this.height; i++) {
                    for (var j = 0; j < this.width; j++) {
                        if (this.board[i][j].type >= 20 && this.board[i][j].type <= 30) {
                            this.ctx.drawImage(this.board[i][j].img, 0, 0, this.board[i][j].width, this.board[i][j].height + 10, j * this.board[i][j].width, i * this.board[i][j].height - 10, this.board[i][j].width, this.board[i][j].height + 10);
                        }
                        else {
                            this.ctx.drawImage(this.board[i][j].img, j * this.board[i][j].width, i * this.board[i][j].height, this.board[i][j].width, this.board[i][j].height);
                        }
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
    var component;
    (function (component) {
        var Player = (function () {
            function Player(pseudo) {
                this.pseudo = pseudo;
                this.isAlive = true;
                this.moveSpeed = 0.1;
                this.bombPosed = false;
                this.delayBomb = 1;
                this.nbBomb = 1;
                this.direction = project.models.Directions.Down;
                this.spritePlayerType = 20;
                this.spriteBombType = 20;
            }
            /**
             * Function which add player on the current map game (same layer)
             * @param map Current map
             */
            Player.prototype.spawn = function (map) {
                var pos = new component.Position(-1, -1);
                var listCell;
                do {
                    pos.x = Math.floor(1 + Math.random() * (map.width - 3));
                    pos.y = Math.floor(1 + Math.random() * (map.height - 3));
                    listCell = map.getCellsToDestroy(pos);
                } while (listCell == null);
                for (var i = 0; i < listCell.length; i++) {
                    if (listCell[i] == pos) {
                        map.board[listCell[i].x][listCell[i].y] = new component.Cell(this.spritePlayerType);
                    }
                    else {
                        map.board[listCell[i].x][listCell[i].y] = new component.Cell(0);
                    }
                }
            };
            return Player;
        }());
        component.Player = Player;
    })(component = project.component || (project.component = {}));
})(project || (project = {}));
var project;
(function (project) {
    var component;
    (function (component) {
        var Position = (function () {
            function Position(x, y) {
                this.x = x;
                this.y = y;
            }
            Position.prototype.toString = function () {
                return "pos[" + this.x + "," + this.y + "]";
            };
            return Position;
        }());
        component.Position = Position;
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
