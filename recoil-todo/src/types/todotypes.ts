export interface IForm {
  todo: string;
}

export interface ITodo {
  id: string;
  text: string;
  category: Categories;
}

export enum Categories {
  Todo = "Todo",
  Doing = "Doing",
  Done = "Done",
}

export interface IButtonClickEvent extends React.MouseEvent<HTMLButtonElement> {
  currentTarget: HTMLButtonElement & {
    name: Categories;
  };
}

export interface IFormEvent extends React.FormEvent<HTMLSelectElement> {
  currentTarget: HTMLSelectElement & {
    value: Categories;
  };
}
