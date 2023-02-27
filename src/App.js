import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  // const increamentCount = () => {
  //   setCount(count+1);
  // };

  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () =>{
      if(color === "black"){
        setColor("red");
      }else{
        setColor("black");
      }
    };
    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      {/* <div>{count}</div>
      <button onClick={increamentCount}>Increment</button> */}

      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >This div can change color. Click on me!
      </div>
    </div>
  );
}

export default App;
