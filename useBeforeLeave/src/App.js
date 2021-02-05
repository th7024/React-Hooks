import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
//마우스가 페이지를 벗어날 때 실행되는 함수
const useBeforeLeave = onBefore => {
if(typeof onBefore !== "function") {
  return;
}
  const handle = (event) => {
    const {clientY} = event;
    if(clientY <= 0){onBefore();}
    onBefore();
  };

  useEffect(() =>{
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);

  }, [])
}

const App = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
