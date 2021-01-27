import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name " {...name} />
    </div>
    // value={name.value},onchange={ochanege.value}을 합친 표현으로 {...name}을 사용 가능
    // {...name}의 경우 name안에 있는 모든 것들을 의미 함.
    // {...name} >= value={name.value},onchange={ochanege.value}
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
