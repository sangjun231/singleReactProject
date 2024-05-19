import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList, todoIsDone }) => {
  return (
    <div id="workList">
      <h2>{!todoIsDone ? "Work" : "Done"}</h2>
      {todoList
        .filter((todo) => todo.isDone === todoIsDone)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
    </div>
  );
};

export default TodoList;
