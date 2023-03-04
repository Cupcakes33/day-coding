import React, { useRef, useState } from "react";

const Gugudan = () => {
  const [first, setfirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (parseInt(value) === first * second) {
      setResult("정답 !");
      setCount((prev) => prev + 1);
      setfirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      input && input.focus();
    } else {
      setResult("오답 !");
      setValue("");
      input && input.focus();
    }
  };
  // onChange 에서는 에러가 안나는데 onSubmit 에서는 왜 에러가 ?
  // 함수를 분리하는 경우 타입추론이 되지 않음
  return (
    <div style={{ width: "150px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {first} 곱하기 {second} 은?
        <span>{count}</span>
      </div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="number"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <p>{result}</p>
    </div>
  );
};

export default Gugudan;
