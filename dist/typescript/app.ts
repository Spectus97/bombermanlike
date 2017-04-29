module project{
    export class Game{
        layerMap : component.Map;
        p1 : component.Player;
        p2 : component.Player;

        constructor(canvas:HTMLCanvasElement){
            this.layerMap = new component.Map(canvas);
            this.p1 = new component.Player("p1");
            this.p2 = new component.Player("p2");
        }

        public run(){
            setInterval(() => {
                this.layerMap.drawOnCanvas();
            },1000/30);
        }
    }
}

window.onload = () => {
    let canvasMapLayer : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("layerDecor");
    let game : project.Game = new project.Game(canvasMapLayer);
    game.run();
    game.p1.spawn(game.layerMap);  
    game.p2.spawn(game.layerMap); 
};