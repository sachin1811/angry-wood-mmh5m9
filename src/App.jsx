import { useState } from "react";
import "./styles.css";

export default function App() {
const [counter,setCounter] = useState(0);
const [timerInterval,setTimerInterval] = useState("");

const handleTimer = () => {
  if(timerInterval)
  {
    clearInterval(timerInterval);
    setTimerInterval("");
  }
  else
  {
    setTimerInterval(setInterval(() => {
      setCounter(x => x+1);
    }, 1000)) 
  }
}

  return (
    <div className="App">
      <button onClick={handleTimer}>{timerInterval?"Stop":"Start"}</button>
      <p>{counter}</p>
    </div>
  );
}
