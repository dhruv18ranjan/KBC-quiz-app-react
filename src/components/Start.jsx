import { useRef } from "react"
import logo from "../Assets/logo.png"
const Start = ({ setUserName }) => {
  const inputref = useRef();
  const handleClick = () => {
    inputref.current.value && setUserName(inputref.current.value);
  }
  return (
    <div className="mainStart">
<img src={logo} className="logo" alt="" />
      <div className="sHeading">

        <h1>Welcome To Kaun Banega CrorePati</h1>
      </div>

      <div className="start">


        <input placeholder="enter your username"
          className="startInput"
          ref={inputref}
        />
        <button className="startButton" onClick={handleClick}>start</button>
      </div>

    </div>
  )
}

export default Start