import { useForm } from "react-hook-form";
import { IForm } from "../types/todotypes";
import { v4 } from "uuid";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoCategoryState, todoState } from "../recoil/todoState";

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(todoCategoryState);

  const onSubmit = (data: IForm) => {
    setValue("todo", "");
    setTodos((prev) => [...prev, { id: v4(), text: data.todo, category }]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", { required: "plase write a todo" })}
        placeholder="Write a todo"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
