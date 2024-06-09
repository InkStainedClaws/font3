function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#596E79');
}

function modelLoaded()
{
    console.log("PoseNet is Intalized :3");
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log;
        }
}

noseX =0;
noseY =0;
difference =0;
rightWristX=0;
leftWristX=0;

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log;
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.x;
            console.log("noseX=" + noseX + "noseY =" + noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = leftWristX - rightWristX;
            difference = floor(leftWristX - rightWristX);

            console.log("LeftWristX =" + leftWristX + "RightWristX = " + rightWristX + "difference = " + difference);

        }
}