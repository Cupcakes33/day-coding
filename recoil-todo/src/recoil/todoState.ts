import { atom, selector } from "recoil";
import { ITodo, Categories } from "../types/todotypes";

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoCategoryState = atom<Categories>({
  key: "category",
  default: Categories.Todo,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(todoCategoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
