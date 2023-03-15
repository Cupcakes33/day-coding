import "../styles/css/todolist.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoCategoryState, todoSelector } from "../recoil/todoState";
import CreateTodo from "../components/CreateTodo";
import Todo from "../components/Todo";
import { Categories, IFormEvent } from "../types/todotypes";

const TodoList = () => {
  const todos = useRecoilValue(todoSelector);
  const setCategory = useSetRecoilState(todoCategoryState);
  const onInput = (event: IFormEvent) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value);
  };

  return (
    <div className="todo-container">
      <div className="todo-form-wrapper">
        <div className="todo-select-wrapper">
          <h1>TodoList</h1>
          <select onInput={onInput}>
            <option value={Categories.Todo}>Todo</option>
            <option value={Categories.Doing}>Doing</option>
            <option value={Categories.Done}>Done</option>
          </select>
        </div>
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
