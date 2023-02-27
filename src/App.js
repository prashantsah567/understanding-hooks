import React, {useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increamentCount = () => {
    setCount(count+1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increamentCount}>Increment</button>
    </div>
  );
}

export default App;
