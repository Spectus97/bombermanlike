module project.component{
    export class Cell implements models.ICell{
        width: number;
        height: number;
        type: number;
        img: string;

        constructor(type:number){
            this.width = 26;
            this.height = 26;
            this.type = type;
            this.img = "";
        }
    }
}