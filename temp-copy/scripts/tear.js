class tearDrop{
  constructor(x, y){
      this.x = x
      this.y = y
      this.r = 25
      this.color = "red"
  }
  show(){
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  checkMouseIn(mouseX, mouseY){
    console.log("HI")
    console.log(Math.sqrt((mouseX-this.x)*(mouseX-this.x) + (mouseY-this.y)*(mouseY-this.y)))
    if(Math.sqrt((mouseX-this.x)*(mouseX-this.x) + (mouseY-this.y)*(mouseY-this.y)) < this.r){
      return true;
    }
  }
  move(x, y){
    this.x = x
    this.y = y
  }
}
