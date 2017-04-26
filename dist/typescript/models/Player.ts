module project.models{
    export interface IPlayer{
        pseudo: string;
        isAlive: boolean;
        position: models.Position;
        spritePlayer: HTMLImageElement;
        spriteBomb: HTMLImageElement;
        moveSpeed: number;
        bombPosed: boolean; // IF TRUE => CAN'T POSE ANY BOMB BEFORE THAT PREVIOUS BOMB HAD EXPLODE
        delayBomb: number; // DELAY OF BOMB BEFORE EXPLOSION WHEN IT IS POSED
        nbBomb: number;
        direction: models.Directions;
    }
}