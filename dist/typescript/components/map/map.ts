module project.component{
    export class Map{
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        width: number;
        height: number;
        board : Cell[][]; 

        constructor(canvas:HTMLCanvasElement){
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
            this.width = (canvas.offsetWidth / 19);
            this.height = (canvas.offsetHeight / 19);
            this.initBoard();
            this.drawOnCanvas();
        }

        public initBoard(): void{
            this.board = [];

            for(var i = 0; i < this.height; i++){
                this.board[i] = [];
                for(var j = 0; j < this.width; j++){
                    this.board[i][j] = new Cell(Math.floor(Math.random() * 2));
                }  
            }   

            console.log("map crée avec ["+this.width+"]["+this.height+"]");     
        }

        public drawOnCanvas(): void{
            for(var i = 0; i < this.height; i++){
                for(var j = 0; j < this.width; j++){
                    let img : HTMLImageElement = new Image(); 
                    let img2 : HTMLImageElement = new Image();  
                    img.src = "build/assets/img/sol.png";
                    this.ctx.drawImage(img,j*this.board[i][j].width,i*this.board[i][j].height,this.board[i][j].width,this.board[i][j].height);
                    if(this.board[i][j].type == 1){
                        img2.src = "build/assets/img/arbuste.png";
                        this.ctx.drawImage(img2,j*this.board[i][j].width,i*this.board[i][j].height,this.board[i][j].width,this.board[i][j].height);
                    }             
                }  
            }   
        }

    }
}