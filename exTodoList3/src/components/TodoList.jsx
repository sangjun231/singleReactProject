import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList, todoIsDone }) => {
  const removeTodo = (id) => {
    return setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  return (
    <>
      <h2>{!todoIsDone ? "Work" : "Done"}</h2>
      <div style={{ display: "flex" }}>
        {todoList
          .filter((todo) => todo.isDone === todoIsDone)
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          })}
      </div>
    </>
  );
};

export default TodoList;
