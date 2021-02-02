import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = (initalTitle) => {
  const [title, setTitle] = useState(initalTitle);
  const updateTitle = () => {
    const htmTitle = document.querySelector("title"); //<title>태그를 의미
    htmTitle.innerText = title; //useState에 있는 title을 의미
  }
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loding...");
  setTimeout(() => titleUpdater("Home"), 5000)
  return (
    <div className="App"></div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
