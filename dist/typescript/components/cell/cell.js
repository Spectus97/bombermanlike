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
//# sourceMappingURL=cell.js.map