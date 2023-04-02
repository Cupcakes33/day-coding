import styled from "styled-components";
import { motion } from "framer-motion";

const Motion = () => {
  const framerOption = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      rotateZ: 360,
      transition: { type: "spring", delay: 1, bounce: 0.5 },
    },
  };
  return (
    <>
      <StyledMotion.Wrapper>
        <StyledMotion.Box
          variants={framerOption}
          initial="initial"
          animate="animate"
        />
      </StyledMotion.Wrapper>
    </>
  );
};

export default Motion;

const StyledMotion = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Box: styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
  `,
};
