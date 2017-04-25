module project{
    export class Game{
        layerMap : component.Map;

        constructor(widthCanvas:number,heightCanvas:number){
            this.layerMap = new component.Map(widthCanvas,heightCanvas);
        }
    }
}

window.onload = () => {
    let canvasMapLayer : HTMLElement = document.getElementById("layerDecor")[0];
    console.log(canvasMapLayer);
    
    //let game : project.Game = new project.Game(canvasMapLayer.width,canvasMapLayer.height);
};