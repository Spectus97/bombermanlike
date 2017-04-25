var project;
(function (project) {
    var Game = (function () {
        function Game(widthCanvas, heightCanvas) {
            this.layerMap = new project.component.Map(widthCanvas, heightCanvas);
        }
        return Game;
    }());
    project.Game = Game;
})(project || (project = {}));
window.onload = function () {
    var canvasMapLayer = document.getElementById("layerDecor")[0];
    console.log(canvasMapLayer);
    //let game : project.Game = new project.Game(canvasMapLayer.width,canvasMapLayer.height);
};
//# sourceMappingURL=app.js.map