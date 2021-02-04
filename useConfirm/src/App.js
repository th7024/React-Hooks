import React from "react";
import ReactDOM from "react-dom";
//클릭을 하면 정말 하겠냐는 창을 띄워주는 것
const useConfirm = (message="", callback) => {
  if (typeof callback !== "function"){
    return;
  }
  const conFirmAction = () => {
    if(confirm(message)){
      callback();
    }
  }
  return conFirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world")
  const confirmDelete = useConfirm("Are you sure",deleteWorld);
  return (
    <div className="App">
      <button onClick = {confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
