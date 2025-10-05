const output = document.getElementById("output");
const startBtn = document.getElementById("start");

// check browser compatibility

const SpeechRecognition = window.speechRecognition ||
    window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    output.innerText = "Speech recognition not supported in this browser";
    startBtn.disabled = true;
}

else {
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous.false;
    recognition.interimResults = false;

    startBtn.onclick = () => {
        recognition.start();
        startBtn.innerText = "Listening...";
    };
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        output.innerText = transcript;
        console.log(transcript);
        if(transcript=="YouTube"){
            window.open("https://www.youtube.com/","_blank");
        }
        else if(transcript==="Google"){ 
            
            window.open("https://www.google.com/","_blank");

        }

          else if(transcript==="Facebook"){
            window.open("https://www.facebook.com/","_blank");

        }

          else if(transcript==="LinkedIn"){
            window.open("https://www.linkedin.com/","_blank");

        }
        startBtn.innerText = "Start Listening..."
    };
    recognition.onerror = (event) => {
        output.innerText = "Error: " + event.error;
        startBtn.innerText = "Start Listening..";
    };

    recognition.onend = () => {
        if (startBtn.innerText === "Listening...") {
            startBtn.innerText = "Start Listening..";
        }
    };
}