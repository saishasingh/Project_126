function preload(){
    audio = loadSound("acoustic-vibe-124586.mp3");
    console.log("YAY")
    music = loadSound("timeless-love-songs-139541.mp3");
    console.log("hurray")
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}



function draw(){
    image(video,0,0,600,530);
}

function play(){
    
}