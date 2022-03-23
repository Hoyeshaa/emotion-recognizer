 Webcam.set({
     width:300,
     height:300,
     image_format:'png',
     png_quality:90
 });
camera = document.getElementById("camera");
Webcam.attach(camera);

function clickpic(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = '<img id="results" src="'+ data_uri +'">'
    });
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y_g1HOZh3/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    data_1 = "first prediction is"+prediction_1;
    data_2 = "second prediction is"+prediction_2;
    var utterthis= new SpeechSynthesisUtterance(data_1+data_2);
    synth.speak(utterthis);
}