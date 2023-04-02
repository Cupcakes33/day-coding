import { useRef } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Motion = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const boxMotion = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { borderRadius: "100px" },
    drag: { backgroundColor: "#9a9a9a" },
  };
  return (
    <>
      <StyledMotion.Wrapper>
        <StyledMotion.BigBox ref={biggerBoxRef}>
          <StyledMotion.Box
            variants={boxMotion}
            drag
            dragSnapToOrigin
            dragElastic={0.3}
            dragConstraints={biggerBoxRef}
            whileHover="hover"
            whileDrag="drag"
            whileTap="click"
          />
        </StyledMotion.BigBox>
      </StyledMotion.Wrapper>
    </>
  );
};

export default Motion;

const StyledOption = {
  fc: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const StyledMotion = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BigBox: styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    overflow: hidden;
    ${StyledOption.fc}
  `,

  Box: styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `,
};
