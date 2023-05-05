import { useState, useEffect } from "react";
import styled from "styled-components";

function App() {
  const [captchaText, setCaptchaText] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [captchaMessage, setCaptchaMessage] = useState<string>("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const result = Array.from({ length: 5 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");

    setCaptchaText(result);
  };

  const handleSubmit = () => {
    if (inputText === captchaText) {
      setCaptchaMessage("Correct");
    } else {
      setCaptchaMessage("Invalid");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) return;

    setInputText(e.target.value);
    setCaptchaMessage("");
  };

  return (
    <BackGround>
      <Container>
        <h1>Captcha</h1>
        <InputBox>
          <input type="text" value={captchaText} disabled />
          <RefreshButton onClick={generateCaptcha}>⟳</RefreshButton>
        </InputBox>
        <InputBox>
          <input
            type="text"
            value={inputText}
            placeholder="Enter captcha"
            onChange={handleInputChange}
          />
        </InputBox>
        <Message isSuccess={captchaMessage === "Correct"}>
          {captchaMessage}
        </Message>
        <button onClick={handleSubmit}>Submit</button>
      </Container>
    </BackGround>
  );
}

export default App;
const BackGround = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;
  border-radius: 5px;
  h1 {
    font-size: 20px;
  }
`;

const InputBox = styled.div`
  position: relative;
`;

const RefreshButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

interface MessageProps {
  isSuccess: boolean;
}

const Message = styled.span<MessageProps>`
  color: ${(props) => (props.isSuccess ? "green" : "red")};
`;
