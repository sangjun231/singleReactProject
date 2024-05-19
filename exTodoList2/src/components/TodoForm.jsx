import { useState } from "react";

const TodoForm = ({ todoList, setTodoList }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContents, setNewContents] = useState("");

  const addTodo = (submit) => {
    submit.preventDefault();

    const todo = {
      id: crypto.randomUUID(),
      title: newTitle,
      contents: newContents,
      isDone: false,
    };

    if (newTitle === "" || newContents === "") {
      setNewTitle("");
      setNewContents("");
      alert("마! 빈칸아이가!");
      return;
    }

    setTodoList([...todoList, todo]);
    setNewTitle("");
    setNewContents("");
  };
  return (
    <form onSubmit={addTodo}>
      제목 :{" "}
      <input
        type="text"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      내용 :{" "}
      <input
        type="text"
        value={newContents}
        onChange={(event) => setNewContents(event.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
