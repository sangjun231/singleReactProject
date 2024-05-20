const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
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
