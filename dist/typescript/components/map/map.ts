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

        /**
         *  Init the map
         */
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

        /**
         * Constraints : 3 blocs type 0 min - cell.type = 0 
         */
        public getCellsToDestroy(startPos: Position): Array<Position>{
            let cellList : Array<Position> = [];
            cellList.push(startPos); // Init with the start Pos , need 2 positions now
            
            if(this.cellIsAvaible(startPos)){
                // FIRST LEFT CELL
                if(this.cellIsAvaible(new Position(startPos.x,startPos.y-1))){
                    cellList.push(new Position(startPos.x,startPos.y-1));

                    if(cellList.length == 3)
                        return cellList;
                }
                // RIGHT
                if(this.cellIsAvaible(new Position(startPos.x,startPos.y+1))){
                    cellList.push(new Position(startPos.x,startPos.y+1));

                    if(cellList.length == 3)
                        return cellList;
                }
                // TOP
                if(this.cellIsAvaible(new Position(startPos.x-1,startPos.y))){
                    cellList.push(new Position(startPos.x-1,startPos.y));

                    if(cellList.length == 3)
                        return cellList;
                }
                // BOTTOM
                if(this.cellIsAvaible(new Position(startPos.x+1,startPos.y))){
                    cellList.push(new Position(startPos.x+1,startPos.y));

                    if(cellList.length == 3)
                        return cellList;
                }
            }

            return null;
        }

        /**
         *  Return true if cell is sol / paille
         * @param pos 
         */
        public cellIsAvaible(pos:Position): boolean{
            return (this.board[pos.x][pos.y].type == 0 || this.board[pos.x][pos.y].type == 1);
        }

        /**
         * return the current map to string format
         */
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

        /**
         *  Draw on canvas the current map
         */
        public drawOnCanvas(): void{
            for(var i = 0; i < this.height; i++){
                for(var j = 0; j < this.width; j++){
                    this.ctx.drawImage(this.board[i][j].img,j*this.board[i][j].width,i*this.board[i][j].height,this.board[i][j].width,this.board[i][j].height);         
                }  
            }   
        }

    }
}