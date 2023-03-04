import { useRef, useState, useCallback } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("사과");
  const [relayWord, setRelayword] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    console.log(relayWord);
    const input = inputRef.current;
    if (word[word.length - 1] === relayWord[0]) {
      setResult("");
      setWord(relayWord);
      setRelayword("");
      input && input.focus();
    } else {
      setResult("틀렸어요!");
      input && input.focus();
    }
  }, [relayWord]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelayword(e.target.value);
  };
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitHandler}>
        <input ref={inputRef} value={relayWord} onChange={onChangeHandler} />
      </form>
      <span>{result}</span>
    </>
  );
};

export default WordRelay;
