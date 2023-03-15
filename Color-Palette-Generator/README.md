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

- Set 차료형을 이용해 중복없는 배열을 생성한다는 점이 아주 섹시하다고 볼 수 있다.
- 코딩테스트 준비가 의외로 실 코딩에 도움이 많이 되는 것 같다.

![Mar-15-2023 12-44-11](https://user-images.githubusercontent.com/108935568/225200911-1e4f068a-ba8e-45cc-b165-6ece6c81fa76.gif)