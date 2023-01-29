import React, { useState } from "react";
import GlobalStyle from "./styledComponent/GlobalStyle";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState("#000000");
  const [isCopy, setIsCopy] = useState(false)

  const randomeColor =  () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColors(color);
  };
  
  const handleCounter = () => {
    randomeColor();
    setCounter((perv) => perv + 1);
  };
  const copyHexCode = async ()=>{
    await navigator.clipboard.writeText(colors)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 1500);
  }
  return (
    <div>
      {isCopy?
      <h3>Code Copied</h3>:
      <h1 title="Copy code" onClick={copyHexCode}>{colors? colors:"#000000"}</h1>}
      <button className="btn" onClick={handleCounter}>
        Click here {counter}
      </button>
      <GlobalStyle colors={colors} />
    </div>
  );
};

export default App;
