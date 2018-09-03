var rNow;
var gNow;
var bNow;
var colNow;
var sliderSide;

class color_wheel{
 constructor() {
  this.x = 100;
  this.xLocation = 10;
  this.thickness = 25;
  this.totalSize = height-200;

  this.rd = 255;
  this.rg = 0;
  this.bl = 0;

  this.rChoice = 0;
  this.gChoice = 0;
  this.bChoice = 0;

  this.array = [this.rd+", "+this.rg+", "+this.bl];
  this.arrayR = [this.rd];
  this.arrayG = [this.rg];
  this.arrayB = [this.bl];

  // rectangle at the bottom that will represent the color hovered on or selected
//  rect(width/8,height-100,150,50);
}


drawColorWheel() {
  this.colorPicker(100 + this.totalSize/6, 100 + this.totalSize/3, 100 + this.totalSize/2, 100 + this.totalSize*2/3, 100 + this.totalSize*5/6, 100 + this.totalSize);
  this.choice();
}



// function to make rectangles for the spectrum
makeRect(y){
  noStroke();
  rect(this.xLocation, y, this.thickness, 1);
}



// function for whole color picker spectrum; increments represent the six segments of color changing
colorPicker(increment1, increment2, increment3, increment4, increment5, increment6){


  while(this.x < increment1){
  //  fill(0);            // this is here just in case I want to add a darker color option/slider later
    this.makeRect(this.x);        // same as above
    fill(this.rd, this.rg, this.bl);   // fills the color of rectangle
    this.makeRect(this.x);        // makes rectangles incrementing by 1 pixel in height
    this.x += 1;
    this.bl += 3.825;        // each rectangle changes color by this amount

    let colorAtTime = this.rd+", "+this.rg+", "+this.bl;
    append(this.array, colorAtTime);       // adds the color values of the rectangle to an this.array
    append(this.arrayR, this.rd);               // adds the red value of the rectangle to an this.array
    append(this.arrayG, this.rg);               // adds the this.rgeen value of the rectangle to an this.array
    append(this.arrayB, this.bl);               // adds the this.blue value of the rectangle to an this.array

  }
  while(this.x >= increment1 && this.x < increment2){
  //  fill(0);
    this.makeRect(this.x);
    fill(this.rd, this.rg, this.bl);
    this.makeRect(this.x);
    this.x += 1;
    this.rd -= 3.825;

    let colorAtTime = this.rd+", "+this.rg+", "+this.bl;
    append(this.array, colorAtTime);
    append(this.arrayR,  this.rd);
    append(this.arrayG, this.rg);
    append(this.arrayB, this.bl);
  }
  while(this.x >= increment2 && this.x < increment3){
  //  fill(0);
    this.makeRect(this.x);
    fill(this.rd, this.rg, this.bl);
    this.makeRect(this.x);
    this.x += 1;
    this.rg += 3.825;

    let colorAtTime = this.rd+", "+this.rg+", "+this.bl;
    append(this.array, colorAtTime);
    append(this.arrayR, this.rd);
    append(this.arrayG, this.rg);
    append(this.arrayB, this.bl);
  }
  while(this.x >= increment3 && this.x < increment4){
  //  fill(0);
    this.makeRect(this.x);
    fill(this.rd, this.rg, this.bl);
    this.makeRect(this.x);
    this.x += 1;
    this.bl -= 3.825;

    let colorAtTime = this.rd+", "+this.rg+", "+this.bl;
    append(this.array, colorAtTime);
    append(this.arrayR, this.rd);
    append(this.arrayG, this.rg);
    append(this.arrayB, this.bl);
  }
  while(this.x >= increment4 && this.x < increment5){
  //  fill(0);
    this.makeRect(this.x);
    fill(this.rd, this.rg, this.bl);
    this.makeRect(this.x);
    this.x += 1;
    this.rd += 3.825;

    let colorAtTime = this.rd+", "+this.rg+", "+this.bl;
    append(this.array, colorAtTime);
    append(this.arrayR, this.rd);
    append(this.arrayG, this.rg);
    append(this.arrayB, this.bl);
  }
  while(this.x >= increment5 && this.x < increment6){
  //  fill(0);
    this.makeRect(this.x);
    fill(this.rd, this.rg, this.bl);
    this.makeRect(this.x);
    this.x += 1;
    this.rg -= 3.825;

    let colorAtTime = this.rd+", "+this.rg+", "+this.bl;
    append(this.array, colorAtTime);
    append(this.arrayR, this.rd);
    append(this.arrayG, this.rg);
    append(this.arrayB, this.bl);
  }
}


// function for whatever you're hovering over
choice(){

  if(mouseX > this.xLocation && mouseX < this.xLocation + this.thickness){
    if(mouseY >= 100 && mouseY < 100 + this.totalSize){

      let value = mouseY-100        // this is to get determine where in the this.array you are (because at mouseY = 100, you're at the 0 index of the this.array)

      rNow = this.arrayR[value];     // sets the red value of what you're hovering over, from the this.array
      gNow = this.arrayG[value];     // sets the this.rgeen value of what you're hovering over, from the this.array
      bNow = this.arrayB[value];     // sets the this.blue value of what you're hovering over, from the this.array

      if(rNow < 0){             // this is to deal with any math that made the value less than 0
        rNow = 0;
      }
      if(rNow > 255){           // this is to deal with any math that made the value this.rgeater than 255
        rNow = 255;
      }
      if(gNow < 0){
        gNow = 0;
      }
      if(gNow > 255){
        gNow = 255;
      }
      if(bNow < 0){
        bNow = 0;
      }
      if(bNow > 255){
        bNow = 255;
      }

      colNow = this.array[value];
      stroke(255);
      fill(0);                  // this is here just in case I want to add a darker color option/slider later
      rect(this.xLocation, height-75,150,50);
      fill(rNow, gNow, bNow);

    }
  }
  // else{
  //   fill(255);
  // }
  rect(this.xLocation, height-75,150,50);    // this creates the rectangle at the bottom (but now, it's filled in w/ the color you're hovering over OR you have selected)

}

}
