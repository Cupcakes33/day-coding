import { useState } from "react";
import { useRecoilState } from "recoil";
import { colorsState } from "../recoil/atoms";
import { generateRandomColors, copyToClipboard } from "../utils/utils";
import styled, { keyframes } from "styled-components";

const ColorPalette = () => {
  const [colors, setColors] = useRecoilState(colorsState);
  const [clickedColor, setClickedColor] = useState<number | null>(null);

  const refreshPalette = () => {
    setColors(generateRandomColors(10));
  };

  const handleClick = (index: number, colorCode: string) => {
    setClickedColor(index);
    copyToClipboard(colorCode);
    setTimeout(() => setClickedColor(null), 500);
  };

  return (
    <Container>
      <ColorContainer>
        {colors.map((color, index) => (
          <ColorBox
            key={index}
            color={color}
            onClick={() => handleClick(index, color)}
            isClicked={clickedColor === index}
          >
            {color}
          </ColorBox>
        ))}
      </ColorContainer>
      <StyledButton onClick={refreshPalette}>Refresh Palette</StyledButton>
      <input></input>
    </Container>
  );
};

export default ColorPalette;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ColorContainer = styled(Container)`
  flex-direction: row;
`;

const clickedAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

const ColorBox = styled.div<{ color: string; isClicked: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: ${({ isClicked }) => (isClicked ? clickedAnimation : "none")} 0.5s;
`;

const StyledButton = styled.button`
  width: 200px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    background-color: #1a5276;
  }
`;
