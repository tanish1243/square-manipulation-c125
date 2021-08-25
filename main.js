noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup(){
canvas = createCanvas(550 ,500);
canvas.position(785, 150)
 
video= createCapture(VIDEO);
video.size(550 ,550);

poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log(" Model has loaded");
}
function gotPoses(Results){
    if(Results.length > 0){
        console.log(Results)
    noseX = Results[0].pose.nose.x;
    noseY = Results[0].pose.nose.y;
    console.log("nose x =" + noseX  + "noseY = " + noseY);
    leftWristX= Results[0].pose.leftWrist.x;
    rightWristX= Results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
    console.log("Difference= " +difference + "right wrist = "+ rightWristX + "left wrist= "+  leftWristX)




    }
}




 function draw(){
background("#45b0d4") ;
document.getElementById("difference").innerHTML="Side of the square is " + difference + "px";
fill("#fd1b1b");
stroke("#fd1b1b")
square(noseX , noseY , difference);
 }