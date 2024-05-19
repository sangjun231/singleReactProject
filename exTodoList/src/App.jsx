import { useState } from "react";

const App = () => {
  const initTodo = [
    {
      id: 1,
      title: "jun",
      body: "study",
      isDone: false,
    },
  ];
  const [todoList, setTodoList] = useState(initTodo);
  const [newTitle, setNewTitle] = useState("");
  const [newContents, setNewContents] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: newTitle,
      contents: newContents,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) =>
    setTodoList(todoList.filter((todo) => todo.id !== id));

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div id="wrappingTodoList">
      <h1>My Todo List!!</h1>
      <form onSubmit={addTodo}>
        제목:
        <input
          type="text"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        내용:
        <input
          type="text"
          value={newContents}
          onChange={(event) => setNewContents(event.target.value)}
        />
        <button type="submit">추가</button>
      </form>
      <div id="todoSection">
        <h2>Work</h2>
        <div id="workList" style={{ display: "flex" }}>
          {todoList
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.contents}</p>
                  <button
                    onClick={() => {
                      removeTodo(todo.id);
                    }}
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => {
                      toggleTodo(todo.id);
                    }}
                  >
                    완료
                  </button>
                </div>
              );
            })}
        </div>
        <h2>Done</h2>
        <div id="doneList" style={{ display: "flex" }}>
          {todoList
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.contents}</p>
                  <button
                    onClick={() => {
                      removeTodo(todo.id);
                    }}
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => {
                      toggleTodo(todo.id);
                    }}
                  >
                    취소
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
