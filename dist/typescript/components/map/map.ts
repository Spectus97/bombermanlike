module project.component{
    export class Map{
        width: number;
        height: number;
        board : Cell[][]; 

        constructor(widthCanvas:number, heightCanvas:number){
            this.width = (widthCanvas / 19);
            this.height = (heightCanvas / 19);
            this.initBoard();
        }

        public initBoard(): void{
            for(var y = 0; y < this.height;y++){
                for(var x = 0; x < this.width; x++){
                    this.board[x][y] = new Cell(1);
                }
            }
        }
    }
}