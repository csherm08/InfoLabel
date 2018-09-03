class Arc{
	constructor(int) {
		this.x = 0
		this.y = 0
		this.distance = height-10;
    this.change = 0;
    this.interval = int;
	}	
	show(){
    noFill()
    stroke("white")
		arc(this.x, this.y, this.distance, this.distance, 0+this.interval, HALF_PI+this.interval)
	}
  update(){
    this.interval += this.change
  }
  move(int){
    this.change = int
  }
}	
