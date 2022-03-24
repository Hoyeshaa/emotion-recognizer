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
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S6LeW14Rb/model.json",modelloaded);

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

function predict(){
  img =  document.getElementById("results");
  classifier.classify(img , gotResults);
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emotion-name-1").innerHTML = results[0].label;
        document.getElementById("emotion-name-2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak()
        if(results[0].label == "happy"){
            document.getElementById("emoji-1").innerHTML = "&#128522";
        }
        if(results[0].label == "sad"){
            document.getElementById("emoji-1").innerHTML = "&#128532";
        }
        if(results[0].label == "angry"){
            document.getElementById("emoji-1").innerHTML = "&#128548";
        }

        if(results[1].label == "happy"){
            document.getElementById("emoji-2").innerHTML = "&#128522";
        }
        if(results[1].label == "sad"){
            document.getElementById("emoji-2").innerHTML = "&#128532";
        }
        if(results[1].label == "angry"){
            document.getElementById("emoji-2").innerHTML = "&#128548";
        }
    }

}