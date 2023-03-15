## Random Color Palette Generaotr

- 참고한 영상 : https://www.youtube.com/watch?v=H-LvaBNLDSQ&t=609s

```jsx
export const generateRandomColors = (num: number) => {
  const colors = new Set<string>();

  while (colors.size < num) {
    colors.add(generateRandomColor());
  }

  return Array.from(colors);
};
```

Set 차료형을 이용해 중복없는 배열을 생성한다는 점이 아주 섹시하다고 볼 수 있다.<br>
코딩테스트 준비가 의외로 실 코딩에 도움이 많이 되는 것 같다.

<br><br>

```jsx
export const copyToClipboard = (text: string) => {
  const input = document.createElement("input");
  input.textContent = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};
```

클립보드에 복사하는 방법에 대해서 자문을 구했는데 조금 특이한 방식이 있어서 적용했다.<br>
작동 원리는 다음과 같다.
 1. 새로운 input DOM 엘리먼트를 생성한다.
 2. textContent 프로퍼티를 사용하여 input에 파라미터로 받은 text를 할당한다.
 3. document.body.appendChild를 사용하여 input를 현재 문서에 추가한다.
 4. input.select()를 사용하여 input를 선택한다.
 5. document.execCommand("copy")를 사용하여 선택된 텍스트를 클립보드에 복사한다.
 6. document.body.removeChild를 사용하여 input를 현재 문서에서 제거한다.

 임시 element를 생성해 거기에 특정 값을 넣어놓고 execCommand 메소드를 사용해 클립보드에 복사하는 방식이다.

<br><br>

![Mar-15-2023 12-44-11](https://user-images.githubusercontent.com/108935568/225200911-1e4f068a-ba8e-45cc-b165-6ece6c81fa76.gif)
