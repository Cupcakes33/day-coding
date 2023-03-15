import "../styles/css/todolist.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../recoil/todoState";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";

const TodoList = () => {
  const todos = useRecoilValue(todoState);
  console.log(todos)

  return (
    <div className="todo-container">
      <div className="todo-form-wrapper">
        <h1>TodoList</h1>
        <CreateTodo />
      </div>

      <ul className="todo-contents-wrapper">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
