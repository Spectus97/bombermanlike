"use strict";

var component = require("./components/map/map");
var Game = (function () {
    function Game(widthCanvas, heightCanvas) {
        this.layerMap = new component.Map(widthCanvas, heightCanvas);
    }
    return Game;
}());
exports.Game = Game;
window.onload = function () {
    var canvasMapLayer = document.getElementById("layerDecor");
    var game = new Game(canvasMapLayer.offsetWidth, canvasMapLayer.offsetHeight);
};
//# sourceMappingURL=app.js.map