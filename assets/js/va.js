const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("welcome to my vote");
    speak("Hello User");
    //wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('candidate registration')) {
        window.open('http://127.0.0.1:8000/candidateRegister', "_blank")
        const finalText = " Candidate Registration Page ખુલિ રહ્યુ છે.";
        speech.text = finalText;
    }else if(message.includes('voter registration')) {
        window.open('http://127.0.0.1:8000/voterRegister', "_blank")
        const finalText = "Opening Voter Registration Page";
        speech.text = finalText;
    }else if(message.includes('registration')) {
        const finalText = "You want to register as candidate or voter.?";
        speech.text = finalText;
    }else if(message.includes('candidate')) {
        window.open('http://127.0.0.1:8000/candidateRegister', "_blank")
        const finalText = "Opening Candidate Registration Page";
        speech.text = finalText;
    }else if(message.includes('voter list')) {
        window.open("http://127.0.0.1:8000/searchVoter", "_blank");
        const finalText = "Opening search page";
        speech.text = finalText;
    }else if(message.includes('voter')) {
        window.open('http://127.0.0.1:8000/voterRegister', "_blank")
        const finalText = "Opening Voter Registration Page";
        speech.text = finalText;
    }
    else if(message.includes('login')) {
        window.open('http://127.0.0.1:8000/Login', "_blank")
        const finalText = "Opening Login Page";
        speech.text = finalText;
    }else if(message.includes('login page')) {
        window.open('http://127.0.0.1:8000/Login', "_blank")
        const finalText = "Opening Login Page";
        speech.text = finalText;
    }else if(message.includes('open login page')) {
        window.open('http://127.0.0.1:8000/Login', "_blank")
        const finalText = "Opening Login Page";
        speech.text = finalText;
    }
    else if(message.includes('contact us page')) {
        window.open('http://127.0.0.1:8000/Contact', "_blank")
        const finalText = "Opening Login Page";
        speech.text = finalText;
    }else if(message.includes('contact us')) {
        window.open('http://127.0.0.1:8000/Contact', "_blank")
        const finalText = "Opening Login Page";
        speech.text = finalText;
    }
    else if(message.includes('election program')) {
        window.open("http://127.0.0.1:8000/Schedule", "_blank");
        const finalText = "Opening election program";
        speech.text = finalText;
    }
    else {
        const finalText = "Requested page in not found in system. Please speck again.";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
