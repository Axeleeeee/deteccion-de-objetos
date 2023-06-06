video = "";
status = "";
objects = [];
function preload() {
    video = createVideo('video.mp4');
   video.hide();
}
 
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (status != ""){
objectDetector.detect(video,gotResults);
for (i = 0; i<objects.length; i++) {
    document.getElementById("status").innerHTML = "estado:objetos detectados";
    document.getElementById("numerodeobjetos").innerHTML = "numero de objetos detectados =" + objects.length;
fill("#ff000000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + percent + "%",objects[i].x + 15, objects[i].y + 15);
nofill();
stroke("#ff000000");
rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
    }

}
}

function INICIA() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: modelo cargado";
}

function modelLoaded() {
    console.log("modelo cargado");
status = true;
video.loop();
video.speed(1);
video.volume(0);
}

function gotResults(error,results) {
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}

