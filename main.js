song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song =loadSound("music.mp3")
}




function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet.on('pose',gotPoses);
 
}
function draw(){
image(video,0,0,600,500);
}

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function modelLoaded(){
    console.log("POSENET INITIALIZED");
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;    
        console.log("The X for left wrist is "+leftWristX+"   "+"The Y for left wrist is "+leftWristY);
        rightWristX=results[0].pose.rifhtWrist.x;
        rightWristY=results[0].pose.rightWrist.y;    
        console.log("The X for right wrist is "+rightWristX+"   "+"The Y for right wrist is "+rightWristY);
    }
}
function stop(){
    song.stop();
    song.setVolume(0);
    song.rate(0);
}