var project;
(function (project) {
    var component;
    (function (component) {
        var Map = (function () {
            function Map(widthCanvas, heightCanvas) {
                this.width = (widthCanvas / 19);
                this.height = (heightCanvas / 19);
                this.initBoard();
            }
            Map.prototype.initBoard = function () {
                for (var y = 0; y < this.height; y++) {
                    for (var x = 0; x < this.width; x++) {
                        this.board[x][y] = new component.Cell(1);
                    }
                }
            };
            return Map;
        }());
        component.Map = Map;
    })(component = project.component || (project.component = {}));
})(project || (project = {}));
//# sourceMappingURL=map.js.map