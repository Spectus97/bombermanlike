module project{
    export class Game{
        layerMap : component.Map;

        constructor(canvas:HTMLCanvasElement){
            this.layerMap = new component.Map(canvas);
        }

        public run(){
            setInterval(() => {
                this.layerMap.drawOnCanvas();
            },1000/60);
        }
    }
}

window.onload = () => {
    let canvasMapLayer : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("layerDecor");
    let game : project.Game = new project.Game(canvasMapLayer);
    game.run();
};