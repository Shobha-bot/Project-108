//Starting Classification
function startClassification(){
    //Microphone Access
    navigator.mediaDevices({
        audio: true
    });
    //classifier varible
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l5NEyEXJE/model.json', modelReady);
}

function modelReady(){
    //code to compare the trained model with the audio captured from the microphone.
    classifier.classify(gotResult);
}


function gotResult(error, results){
    console.log("Got Results!");

    if(error){
        //error
        console.error(error);
    }

    else{
        //Logging the results
        console.log(results);
        
        //random number for 
        //r
        random_number_r = Math.floor(Math.random() * 255) + 1;
        //g
        random_number_g = Math.floor(Math.random() * 255) + 1;
        //b
        random_number_b = Math.floor(Math.random() * 255) + 1;

        //Setting the Sound
        document.getElementById("result_label").innerHTML  = "I can hear - " + results[0].label;
        //Setting the Accuracy
        document.getElementById("result_confidence").innerHTML  = "Accuracy - " + (results[0].confidence * 100).toFixed(3) + "%";
        //Styling the colors
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
         //Image varible
        img = document.getElementById("image");
         
        //Condition for dog
        if(results[0].label == "Puppy"){
            img.src = 'dog-barking.gif';
        }

        //Condition for cat
        else if(results[0].label == "Meowing"){
            img.src = 'cat-meowing.gif';
        }
         
        //Condition for pony
        else if(results[0].label == "Neighing"){
            img.src = 'pony-horse.gif';
        }

        //Condition for lion
        else if(results[0].label == "Roaring"){
            img.src = 'lion-roar.gif';
        }
         //Condition for background color
        else{
            img.src = 'talking.gif';
 
        }
    }
}