class PlayerBehavior extends Sup.Behavior {
  awake() {
  }

  update() {
       if(Sup.Input.isKeyDown("D")){
         this.actor.move(new Sup.Math.Vector3(0.1,0,0));
       }
       else if(Sup.Input.isKeyDown("Z")){
         this.actor.move(new Sup.Math.Vector3(0,0.1,0));
       }
       else if(Sup.Input.isKeyDown("Q")){
         this.actor.move(new Sup.Math.Vector3(-0.1,0,0));
       }
       else if(Sup.Input.isKeyDown("S")){
         this.actor.move(new Sup.Math.Vector3(0,-0.1,0));
       }
    
  }
}
Sup.registerBehavior(PlayerBehavior);
