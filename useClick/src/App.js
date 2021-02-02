import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  if(typeof onclick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(() => {
    //useeffect(, []) <-[]가 존재하지 않았을 경우에 useEffect안에 함수를 넣으면 컴포넌트DidMount와 DidUpdate일 때 실행이 된다.
    // []가 존재한다면 DidMount일 때만 실행된다.
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //컴포넌트WillUnMount인 경우에는 리턴을 실행한다.
    //함수를 리턴하는 경우에는 useEffect를 리턴받은 함수는 컴포넌트WillUnMount일 때 호출된다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("안녕");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
