import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div>
        <h1>My TodoList!</h1>
        <TodoForm todoList={todoList} setTodoList={setTodoList} />
        <div>
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            todoIsDone={false}
          />
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            todoIsDone={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
