import  { useEffect, useState } from 'react'


const Timer = ({setStop,questionNumber}) => {
    const [timer, setTimer] = useState(45);

    useEffect(() => {
        
        if(timer===0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000)

        return ()=> clearInterval(interval);

    },[setStop,timer])

    useEffect(()=>{
        setTimer(45);
    },[questionNumber])
    return timer;
}

export default Timer