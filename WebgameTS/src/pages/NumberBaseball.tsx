import { useState, useRef, useCallback } from "react";
import { getRandomNumbers } from "../util/getNumbers";
import Try from "../components/Try";
import { TryInfo } from "../types/NumberBaseballTypes";

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getRandomNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState<TryInfo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = useCallback<(e: React.FormEvent) => void>(
    (e) => {
      e.preventDefault();
      const input = inputRef.current;
      if (value === answer.join("")) {
        setTries((t) => [
          ...t,
          {
            try: value,
            result: "홈런",
          },
        ]);
        setResult("홈런");
        setValue("");
        setAnswer(getRandomNumbers());
        setTries([]);
        input && input.focus();
      } else {
        const answerArray = value.split("").map((e) => parseInt(e));
        let strike = 0;
        let ball = 0;
        if (tries.length >= 9) {
          setResult(
            `10번이나 틀렸어요 바보얌 답은 ${answer.join(",")} 였습니다~`
          );
          setValue("");
          setAnswer(getRandomNumbers());
          setTries([]);
          input && input.focus();
        } else {
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === answer[i]) {
              strike += 1;
            } else if (answer.includes(answerArray[i])) {
              ball += 1;
            }
          }
          setTries((t) => [
            ...t,
            {
              try: value,
              result: `${strike}strike ${ball}ball`,
            },
          ]);
          setValue("");
          input && input.focus();
        }
      }
    },
    [value]
  );
  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          ref={inputRef}
          maxLength={4}
          value={value}
          onChange={useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value),
            []
          )}
        />
      </form>
      <div> try : {tries.length}</div>
      <ul>
        {tries.map((e, i) => (
          <Try key={`${i + 1}차 시도 : ${e.try}`} tryInfo={e} />
        ))}
      </ul>
    </>
  );
};

export default NumberBaseball;
