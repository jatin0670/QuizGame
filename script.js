let playBtn = document.querySelector(".playBtn");
let page1 = document.querySelector("#page1");
let page2 = document.querySelector("#page2");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let page3 = document.querySelector("#page3");
let div3txt = document.querySelector(".div3txt");
let  div3btn = document.querySelector(".div3btn");
let page4 = document.querySelector("#page4");
let div4txt = document.querySelector(".div4txt");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let page5 = document.querySelector("#page5");
let div5txt = document.querySelector(".div5txt");
let song = new Audio('assets/bgSong.mp3');
let clickFx = new Audio('assets/clickSound.mp3');
song.loop = true;

playBtn.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "flex";
    song.play();
});

card1.addEventListener("click", ()=>{
    clickFx.play();
    alert("You Selected ISHOWSPEED");
    page2.style.display = "none";
    page3.style.display = "flex";
    div3txt.innerHTML = "Hello Speed"
    
    
})

card2.addEventListener("click", ()=>{
    clickFx.play();
    alert("You Selected KAI CENAT");
    page2.style.display = "none";
    page3.style.display = "flex";
    div3txt.innerHTML = "Hello Kai"
    
})

div3btn.addEventListener("click", ()=>{
    page3.style.display = "none";
    page4.style.display = "flex";
    clickFx.play();
    loadingQ();
    
})

const quizData = [
    {
        question: "Who is known for barking on stream?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      },
      {
        question: "Who won Streamer of the Year in 2023?",
        options: ["IShowSpeed", "Kai Cenat"],
        correct: "Kai Cenat"
      },
      {
        question: "Who accidentally set off fireworks in his room?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      },
      {
        question: "Who was part of AMP?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who is more known for crazy FIFA reactions?",
        options: ["IShowSpeed", "Kai Cenat"],
        correct: "IShowSpeed"
      },
      {
        question: "Who once shaved his head live on stream?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      },
      {
        question: "Who streams often from a decorated NYC room?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who is known for saying 'CR7 SUIII!'?",
        options: ["IShowSpeed", "Kai Cenat"],
        correct: "IShowSpeed"
      },
      {
        question: "Who is shorter in height?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who met Cristiano Ronaldo in person?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      },
      {
        question: "Who did a fake Ronaldo interview prank on stream?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      },
      {
        question: "Who did a 24-hour jail stream?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who got scared by fireworks in his own room?",
        options: ["IShowSpeed", "Kai Cenat"],
        correct: "IShowSpeed"
      },
      {
        question: "Who got banned on Twitch for a prank call?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      },
      {
        question: "Who often streams with Fanum?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who made a song called 'World Cup'?",
        options: ["IShowSpeed", "Kai Cenat"],
        correct: "IShowSpeed"
      },
      {
        question: "Who did the 'Kick vs Twitch' comparison stream?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who played Roblox horror games screaming like crazy?",
        options: ["IShowSpeed", "Kai Cenat"],
        correct: "IShowSpeed"
      },
      {
        question: "Who collaborated with Ice Spice in a stream?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "Kai Cenat"
      },
      {
        question: "Who screamed 'SUIII' while shirtless running around?",
        options: ["Kai Cenat", "IShowSpeed"],
        correct: "IShowSpeed"
      }
];


let score = 0;

function loadingQ(){

    let random = Math.floor(Math.random() * quizData.length);
    div4txt.innerHTML = quizData[random].question;
    opt1.innerHTML = quizData[random].options[0];
    opt2.innerHTML = quizData[random].options[1];

    opt1.onclick = ()=>{
      clickFx.play();
      if(opt1.innerHTML==quizData[random].correct){
        div4txt.innerHTML = "";
        opt1.innerHTML = "";
        opt2.innerHTML = "";
        score++;
        loadingQ();
      }
      else{
        alert("Sorry Wrong Answer");
        page4.style.display = "none";
        page5.style.display = "flex";
        div5txt.innerHTML = `Sorry, Game Over | Score: ${score}`;
      }
    };
  

    opt2.onclick = ()=>{
      clickFx.play();
      if(opt2.innerHTML==quizData[random].correct){
        div4txt.innerHTML = "";
        opt1.innerHTML = "";
        opt2.innerHTML = "";
        score++;
        loadingQ();
      }
      else{
        alert("Sorry Wrong Answer");
        page4.style.display = "none";
        page5.style.display = "flex";
        div5txt.innerHTML = `Sorry, Game Over | Score: ${score}`;
      }
    };
    
}
