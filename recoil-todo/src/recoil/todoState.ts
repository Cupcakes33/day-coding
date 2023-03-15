import { atom } from "recoil";
import { ITodo } from "../types/todotypes";

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
