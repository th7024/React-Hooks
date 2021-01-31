import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [anumber, setANumber] = useState(0);
  useEffect(sayHello, [number]);
    //useEffect는 컴포넌트가 mount 되었을 때 실행됨.
    //useEffect의 첫번 째 인자는 함수로서의 effect가 되지만
    //두번 째 인자는 (deps)리스트, 배열에 있는 값일 때만 값이 변한다.
    //useEffect 기본 형태 useEffect(effect(함수), deps(배열))
    //useEffect 는 useEffect(componentDidMount, componentWillUpdate)
    // https://velopert.com/1130 컴포넌트 라이프 사이클
    
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
