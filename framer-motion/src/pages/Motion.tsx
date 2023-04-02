import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

const Motion = () => {
  const { openModal } = useModal();

  const modalData = {
    title: "modal",
    contents: "modal",
    callback: () => alert("modal"),
  };

  const modalOption = {
    canCloseOnOverlayClick: true,
    isCloseButton: true,
  };

  const boxMotion = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { borderRadius: "100px" },
    drag: { backgroundColor: "#9a9a9a" },
  };

  const x = useMotionValue(0);
  const scale = useTransform(x, [-700, 0, 700], [2, 1, 0.1]);

  useEffect(() => {
    // x.onChange((e) => console.log(x.get()));
    scale.onChange((e) => console.log(scale.get()));
  }, [scale]);
  return (
    <>
      <StyledMotion.Wrapper>
        {/* <StyledMotion.Box
          variants={boxMotion}
          style={{ x, scale }}
          drag="x"
          dragSnapToOrigin
        /> */}
        <button onClick={() => openModal(modalData)}>Open Modal</button>
        <Modal modalOption={modalOption} />
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
