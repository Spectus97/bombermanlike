module project.component{
    export class Cell implements models.ICell{
        width: number;
        height: number;
        type: number;
        img: HTMLImageElement;

        constructor(type:number){
            this.width = 26;
            this.height = 26;
            this.type = type;
            this.img = new Image();
            
            if(this.type == 0){ // SOL
                this.img.src = "build/assets/img/sol.png"; 
            }else if(this.type == 1){ // ARBUSTE
                this.img.src = "build/assets/img/paille.png"; 
            }else if(this.type == 2){ // EAU_SEUL
                this.img.src = "build/assets/img/bois.png"; 
            }else if(this.type == 3){ // EAU_VERTICALE
                this.img.src = "build/assets/img/eau_vertical.png"; 
            }else if(this.type == 4){ // EAU_HORIZONTALE
                this.img.src = "build/assets/img/eau_horizontale.png"; 
            }else if(this.type == 5){ // EAU_COIN_BAS_DROIT
                this.img.src = "build/assets/img/eau_coin_bas_droit.png"; 
            }else if(this.type == 6){ // EAU_COIN_BAS_GAUCHE
                this.img.src = "build/assets/img/eau_coin_bas_gauche.png"; 
            }else if(this.type == 7){ // EAU_COIN_HAUT_GAUCHE
                this.img.src = "build/assets/img/eau_coin_haut_gauche.png"; 
            }else if(this.type == 8){ // EAU_COIN_HAUT_DROIT
                this.img.src = "build/assets/img/eau_coin_haut_droit.png"; 
            }              
        }
    }
}