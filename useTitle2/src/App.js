import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";



const App = () => {
  const potato = useRef();
  return (
    <div className="App">
      <div>Hi</div>
      <input input={potato} placeholder="la" /> 
    </div>
      //input에게 potato를 참조하라고 명령
      //const 내부에 있는 컴포넌트는 reference element를 가지고 있음.

  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
