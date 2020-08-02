
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
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    
    createCanvas(innerWidth, innerHeight); 
    
    // this defines the image where the drawing takes place so it can be saved 
    image(img, 0, 0); 
    
    // a button for saving the canvas 
    let = saveBtn = createButton("Save Drawing"); 
    saveBtn.position() 
    saveBtn.mousePressed(saveToFile); 
  } 
    
  function saveToFile() { 
    // Save the current canvas to file as png 
    saveCanvas('mydrawing', 'png') 
    alert("Your drawing will be saved to your device")
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
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}
 function mousePressed(){
     currentPath = [];
     mainPath.push(currentPath);
 }
//  to delete or clear a drawing
 let clearThis = function clearDrawing (){
     mainPath.splice(0);
     background(255);
 };
 clear.addEventListener("click", clearThis);

