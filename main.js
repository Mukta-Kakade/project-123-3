left_wrist = 0;
right_wrist = 0;
Difference = 0;

function setup(){
    canvas = createCanvas(350, 350);
    canvas.position(560, 150);
    video = createCapture(350, 350);
    video.size(350, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model is loaded');
}

function draw() {
    background('#ce5cff');
    textSize(Difference);
    fill('#000000');
    text('School Notice', 50, 400)
}

function gotPoses(results) {
    if(results.length>0)
    {
        console.log(results);

        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        Difference = floor(left_wrist - right_wrist);
        console.log("The X value of left wrist =" + left_wrist + "The X value of right wrist = " + right_wrist);
    }
}