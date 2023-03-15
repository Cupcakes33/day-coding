import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil/todoState";
import { IButtonClickEvent, ITodo } from "../types/todotypes";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            category: name,
          };
        }
        return todo;
      });
    });
  };
  return (
    <li>
      {}
      {text}
      {category !== "Todo" ? (
        <button name="Todo" onClick={onClick}>
          Todo
        </button>
      ) : null}
      {category !== "Doing" ? (
        <button name="Doing" onClick={onClick}>
          Doing
        </button>
      ) : null}
      {category !== "Done" ? (
        <button name="Done" onClick={onClick}>
          Done
        </button>
      ) : null}
    </li>
  );
};

export default Todo;
