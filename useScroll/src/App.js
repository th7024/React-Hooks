import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); //이벤트를 추가한 경우 같은 이름과 같은 핸들러로 지워야 함.
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        야 왜 안바뀌냐
      </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
