class Label{
  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.color = "white"
  }
  show(){
    fill(this.color)
    rect(this.x, this.y, this.width, this.height, 20)
  }
  checkForTear(t){
    if(t.x < this.x + this.width && t.x > this.x){
      if(t.y < this.y + this.height && t.y > this.y){
        this.color = t.color
      }
    }
  }

  TearReleasedInLabel(t){
    if(t.x < this.x + this.width && t.x > this.x){
      if(t.y < this.y + this.height && t.y > this.y){
        return true
      }
    }
    return false
  }
}
