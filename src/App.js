import "./scss/App.scss";
import StateChange from "./components/StateChange";
import ToDoApp from "./components/ToDoApp";
import PostApp from "./components/PostApp";



function App() {
  
  return (
    <div className="App">
      <div className="conteiner">
        <StateChange />
        <ToDoApp />
        <PostApp />
      </div>
    </div>
  );
}

export default App;
