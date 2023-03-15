import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil/todoState";
import { Categories, IButtonClickEvent, ITodo } from "../types/todotypes";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);

  const deleteHandle = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onClick = (e: IButtonClickEvent) => {
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
      <button onClick={deleteHandle}>X</button>
      {text}
      {category !== Categories.Todo ? (
        <button name={Categories.Todo} onClick={onClick}>
          Todo
        </button>
      ) : null}
      {category !== Categories.Doing ? (
        <button name={Categories.Doing} onClick={onClick}>
          Doing
        </button>
      ) : null}
      {category !== Categories.Done ? (
        <button name={Categories.Done} onClick={onClick}>
          Done
        </button>
      ) : null}
    </li>
  );
};

export default Todo;
