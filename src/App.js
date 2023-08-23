import { useEffect, useState } from "react";
import "./App.css"
import "../src/components/Quiz"
import Timer from "./components/Timer";
import Quiz from "../src/components/Quiz";
import Start from "../src/components/Start"
import {data,moneyPyramid} from "./data";


function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const[earned,setEarned]=useState("₹ 0");
  const[username,setUserName]=useState(null);


   useEffect(()=>{
    questionNumber > 1
     && setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount);
  },[questionNumber])

  return (
    <div className='app'>

    {username? (
      <>
      <div className="main">

{stop? (<h1 className="endText">You Earned :{earned}</h1>):

(<>
<div className="top">
  <div className="timer">
    <Timer setStop={setStop} questionNumber={questionNumber} />
  </div>
</div>
{/* ----------------------------------------------------- */}
<div className="bottom">
  <Quiz data={data}
    setStop={setStop}
    questionNumber={questionNumber}
    setQuestionNumber={setQuestionNumber}
    
     />
</div>
</>
)}
</div>

{/*---------------------------------------------------------------------------------*/}
<div className="pyramid">
<ul className="moneylist">
  {moneyPyramid.map((m) => (
    <li className={questionNumber === m.id ? "moneyListItems active" : "moneyListItems"}>
      <span className="mlnumber">{m.id}</span>
      <span className="mlamount">{m.amount}</span>
    </li>
  ))}


</ul>
</div>
      </>
    ): <Start setUserName={setUserName} />}

      
    </div>
  );
}

export default App;
