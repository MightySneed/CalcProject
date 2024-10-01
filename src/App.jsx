import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  const [toggle, setToggle] = useState(true);
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "." , "+", "-", "*", "/", "C", "CE"];

  const handleClick = (key) => {
    if (key === "CE") {
      setMessage("");
    } else if (key === "C") {
      setMessage(message.slice(0, -1));
    } else {
      setMessage(message + key);
    }
  };

  function handleMaths() {
    try {
      const result = evaluate(message);
      setMessage(result.toString());
    } catch (error) {
      setMessage("Error");
    }
  }

  function ClearAll() {
    setMessage('');
  }

  const logChar = (key) => {
    console.log(key);
    handleClick(key);
  };

  return (
    <div>
      <div className="wrapper" id="display">
         <h2>{message}</h2>
         <br/>
         </div>
      <div className="wrapper" id="keyboard">
        
        {keys.map((key, index) => (
          <button className="oleclickaroo" key={index} onClick={() => logChar(key)}>
            {key}
          </button>
        ))}
        <button onClick={handleMaths}>=</button>
      </div>
    </div>
  );
}

export default App;