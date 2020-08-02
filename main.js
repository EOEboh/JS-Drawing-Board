
const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const clear = document.getElementById("clear");
const mainPath = [];
let currentPath = [];
// this serves as a background for any of the drawing lol
function preload() { 
    img = loadImage('sample.jpg'); 
    // this P5js function defines the canvas and the background colour
  } 
function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    
    
    
    // this defines the image where the drawing takes place so it can be saved 
    image(img, 0, 0); 
    
    // a button for saving the canvas 
    let = saveBtn = createButton("Save Sketch"); 
    saveBtn.position(10,210);
    saveBtn.touchStarted(saveToFile); 
  } 
  
    
  function saveToFile() { 
    // Save the current canvas to file as png 
    saveCanvas('my sketch', 'jpg') 
    alert("Your drawing will be saved to your device")
  } 
//   to make the canvas responsive to different window sizes
  function windowResized(){
      resizeCanvas(windowWidth, windowHeight)
  }

//  this p5js function makes the drawing by defining the vertices and color
function draw() {
    noFill();

    if (mouseIsPressed){
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }
mainPath.forEach(path =>{
    beginShape();
    path.forEach(point => {
        stroke(point.color);
        strokeWeight(point.weight);
        vertex(point.x, point.y);
    });
    // ending the drawing
    endShape();
});

}
 function touchStarted(){
     currentPath = [];
     mainPath.push(currentPath);
 }
//  to delete or clear a drawing
 let clearThis = function clearDrawing (){
     mainPath.splice(0);
     background(255);
 };
 clear.addEventListener("click", clearThis);

