class CameraBehavior extends Sup.Behavior {
  awake() {
    this.actor.setPosition(new Sup.Math.Vector3(0,0,10));
  }

  update() {
    
  }
}
Sup.registerBehavior(CameraBehavior);
