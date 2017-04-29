module project.component{
    export class Position implements models.IPosition{
        x: number;
        y: number;
        
        constructor(x:number,y:number){
            this.x = x;
            this.y = y;
        }

        public toString(): string{
            return "pos["+this.x+","+this.y+"]";
        }
    }
}