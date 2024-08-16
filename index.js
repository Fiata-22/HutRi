const flag = document.querySelector(".flag");
const button = document.querySelector("button");
const videos = document.querySelector("video"); // tambahkan selector untuk video
const textElement = document.querySelector(".text");



button.addEventListener("click", () => {
  SpeechRecognitionAlternatives("SELAMAT HARI KEMERDEKAAN INDONESIA  ke - 79 ❣")
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    video.play('videos/foto.mp4');
  });

});

// function SpeechRecognitionAlternatives(text) {
//   const speech = new SpeechSynthesisUtterance();  
//   speech.text = text;
//   speech.volume = 5;
//   speech.rate = 1;
//   speech.pitch = 1;
//   speech.lang = 'id';

//   window.speechSynthesis.speak(speech);
// }

// flag.addEventListener("click", () => {
//   alert("SELAMAT HARI KEMERDEKAAN INDONESIA!");
//   textElement.style.color = "red";
// });