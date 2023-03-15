export interface IForm {
  todo: string;
}

export type categoryType = "Todo" | "Doing" | "Done";

export interface ITodo {
  id: string;
  text: string;
  category: categoryType;
}

export interface IButtonClickEvent extends React.MouseEvent<HTMLButtonElement> {
  currentTarget: HTMLButtonElement & {
    name: categoryType;
  };
}
