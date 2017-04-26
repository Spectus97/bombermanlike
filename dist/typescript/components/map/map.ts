module project.component{
    export class Map{
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        width: number;
        height: number;
        board : Cell[][];
        defaultMap : number[][]; 

        constructor(canvas:HTMLCanvasElement){
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
            this.width = Math.floor(canvas.offsetWidth / 26);
            this.height = Math.floor(canvas.offsetHeight / 26);
            this.initBoard();
            this.drawOnCanvas();
        }

        public initBoard(): void{
            this.board = [];
            this.defaultMap =  [[7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [3,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3],
                                [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                                [6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5]];

            for(var i = 0; i < this.height; i++){
                this.board[i] = [];
                for(var j = 0; j < this.width; j++){           
                    this.board[i][j] = new Cell(this.defaultMap[i][j]);
                }  
            }    
        }

        public boardToString(): string{
            let txt: string = "[";

            for(var i = 0; i < this.height; i++){
                txt += "[";
                for(var j = 0; j < this.width; j++){
                    if(j != (this.width-1))
                        txt += this.board[i][j].type+",";
                    else
                        txt += this.board[i][j].type;
                }

                if(i != (this.height-1))
                    txt += "],"; 
                else
                    txt += "]"; 
            }

            return txt+"]";
        }

        public drawOnCanvas(): void{
            for(var i = 0; i < this.height; i++){
                for(var j = 0; j < this.width; j++){
                    this.ctx.drawImage(this.board[i][j].img,j*this.board[i][j].width,i*this.board[i][j].height,this.board[i][j].width,this.board[i][j].height);         
                }  
            }   
        }

    }
}