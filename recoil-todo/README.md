## Recoil Todo List
- 참고한 강의 : React Master Class by Nomadcoders

<br>

![Mar-15-2023 21-49-27](https://user-images.githubusercontent.com/108935568/225313696-7b8592ab-a18e-4337-b739-0890260ea98e.gif)

<br>

단순한 TodoList CRUD 이므로 디자인은 신경쓰지 않았다. <br>
Recoil은 정말로 React와 비슷해서 러닝커브가 굉장히 낮다고 판단된다. <br>
다른 상태관리 라이브러리를 사용해봤다면 하루면 배울 수 있을 정도? <br>

```jsx
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
```

enum의 활용과 extends interface를 만드는 방법. <br>
타입스크립트는 조금 더 깊게 공부할 필요가 있어보인다. <br>
