const TodoItem = ({ todo, todoList, setTodoList }) => {
  const removeTodo = (id) =>
    setTodoList(todoList.filter((todo) => todo.id !== id));

  const toggleTodo = (id) =>
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  return (
    <div>
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
        {!todo.isDone ? "완료" : "취소"}
      </button>
    </div>
  );
};

export default TodoItem;
