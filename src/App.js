import { useEffect, useState } from "react";
import "./styles.css";

export default function App() { 
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [randomNumber, setRandomNumber] = useState(randomNumberGenerator)
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   
  function randomNumberGenerator(){
    return Math.floor(Math.random()*10+1)
  }
  

  useEffect(() => {
    if(Number(text) === randomNumber){ 
      setScore(score+1)
      setRandomNumber(randomNumberGenerator)
    }
    return () => 
      recognition.removeEventListener("result", this);
  }, [text])
  let recognition = new window.SpeechRecognition();
  recognition.start();
  window.addEventListener("click", () => console.log("hi"), {once: true})
  recognition.addEventListener("result", (e) => {
    console.log(e.results[0][0].transcript)
    setText(e.results[0][0].transcript)
  })

  return (
    <div className="App">
      <h2>Number Game</h2>
      <h4>Score: {score}</h4>
      <div><h5>What you speak:</h5><p>{text}</p></div>
      <div>Number: {randomNumber}</div>
    </div>
  );
}
