module project.component{
    export class Player implements models.IPlayer{
        pseudo: string;
        isAlive: boolean;
        position: Position;
        spritePlayerType: number;
        spriteBombType: number;
        moveSpeed: number;
        bombPosed: boolean; // IF TRUE => CAN'T POSE ANY BOMB BEFORE THAT PREVIOUS BOMB HAD EXPLODE
        delayBomb: number; // DELAY OF BOMB BEFORE EXPLOSION WHEN IT IS POSED
        nbBomb: number;
        direction: models.Directions;
        
        constructor(pseudo:string){
            this.pseudo = pseudo;
            this.isAlive = true;
            this.moveSpeed = 0.1;
            this.bombPosed = false;
            this.delayBomb = 1;
            this.nbBomb = 1;
            this.direction = models.Directions.Down;
            this.spritePlayerType = 20;
            this.spriteBombType = 20;
        }

        /**
         * Function which add player on the current map game (same layer) 
         * @param map Current map
         */
        public spawn(map: component.Map): void{
            let pos : Position = new Position(-1,-1);
            let listCell : Array<Position>;
            
            do{
                pos.x = Math.floor(1 + Math.random() * (map.width-3));
                pos.y = Math.floor(1 + Math.random() * (map.height-3)); 
                listCell = map.getCellsToDestroy(pos); 
            }while(listCell == null);

            for(var i = 0; i < listCell.length; i++){              
                if(listCell[i] == pos){ // Player                  
                    map.board[listCell[i].x][listCell[i].y] = new Cell(this.spritePlayerType);
                }else{
                    map.board[listCell[i].x][listCell[i].y] = new Cell(0);
                }
            }
                     
        }
    }
}