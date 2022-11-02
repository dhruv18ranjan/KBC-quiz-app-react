import React, { useEffect, useState } from 'react'
import "../app.css"
import useSound from 'use-sound';
import play from "../Assets/play.mp3"
import correct from "../Assets/correct.mp3"
import wrong from "../Assets/wrong.mp3"


const Quiz = ({data,setStop,questionNumber,setQuestionNumber}) => {

  const[question,setQuestion]=useState(null);
  const[selectedAnswer,setSelectedAnswer]=useState(null);
  const[className,setClassName]=useState("answer");
  const [letsPlay]=useSound(play);
  const [correctAns]=useSound(correct);
  const [wrongAns]=useSound(wrong);


  useEffect(()=>{
    letsPlay();
  },[letsPlay])

  //fetching the questions from the data

  useEffect(()=>{

    setQuestion(data[questionNumber-1])

  },[data,questionNumber]);

  const delay=(duration,callback)=>{
    setTimeout(()=>{
      callback()
    },duration)
  };

//answer clicking function
  const handleClick=(a)=>{
      setSelectedAnswer(a);

      setClassName("answer active");

      delay(3000,()=>{
        setClassName(a.correct?"answer correct": "answer wrong");
      })

      delay(5000,()=>{

        if(a.correct){
          correctAns();
          delay(2000,()=>{
            setQuestionNumber((prev)=> prev+1);
            setSelectedAnswer(null); 

          });
        }

        else if(a.correct && questionNumber===(15)){
          correctAns();
          delay(2000,()=>{

            setStop(true);
          })
        }

        else{
          wrongAns();
          delay(2000,()=>{

            setStop(true);
          })
          
        }

      })
  }

  



  return (
    <div className='quiz'>

        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a)=>(
              <div className={selectedAnswer===a?className :"answer"} onClick={()=>handleClick(a)} >{a.text}</div>
            ))}
        </div>

    </div>
  )
}

export default Quiz