import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useModal from "../hooks/useModal";

interface ModalProps {
  modalOption?: {
    canCloseOnOverlayClick?: boolean;
    isCloseButton?: boolean;
    padding?: string;
    width?: string;
    height?: string;
  };
}

const Modal: React.FC<ModalProps> = ({ modalOption = {} }) => {
  const { modalState, closeModal } = useModal();

  const {
    canCloseOnOverlayClick = true,
    isCloseButton = true,
    padding,
    width,
    height,
  } = modalOption;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (canCloseOnOverlayClick) {
      closeModal();
    }
  };

  const containerMotion = {
    start: { scale: 0, opacity: 0 },
    end: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return createPortal(
    <AnimatePresence>
      {modalState.isOpen && (
        <StyledModal.Overlay
          onClick={handleOverlayClick}
          canCloseOnOverlayClick={canCloseOnOverlayClick}
        >
          <StyledModal.Container
            onClick={(e) => e.stopPropagation()}
            padding={padding}
            width={width}
            height={height}
            variants={containerMotion}
            initial="start"
            animate="end"
            exit="exit"
            key="modal"
          >
            {isCloseButton && (
              <StyledModal.CloseButton onClick={closeModal}>
                &times;
              </StyledModal.CloseButton>
            )}
            <StyledModal.Title>{modalState.title}</StyledModal.Title>
            <StyledModal.Contents>{modalState.contents}</StyledModal.Contents>
            {modalState.callback && (
              <StyledModal.Footer>
                <button onClick={closeModal}>Cancel</button>
                <button onClick={modalState.callback}>Ok</button>
                {/* 모달 디자인이 나오면 버튼 디자인, 문구 변경할 것 */}
              </StyledModal.Footer>
            )}
          </StyledModal.Container>
        </StyledModal.Overlay>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;

const StyledModal = {
  Overlay: styled.div<{ canCloseOnOverlayClick: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `,

  Container: styled(motion.div)<{
    padding?: string;
    width?: string;
    height?: string;
  }>`
    background-color: white;
    border-radius: 8px;
    padding: ${({ padding }) => padding ?? "10px"};
    width: ${({ width }) => width ?? "500px"};
    height: ${({ height }) => height ?? "400px"};
    position: relative;
    z-index: 1000;
  `,

  Title: styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  `,

  Contents: styled.div`
    padding-top: 30px;
    width: 100%;
    height: 100%;
  `,

  Footer: styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 10px;
    gap: 10px;
    button {
      width: 20%;
    }
  `,

  CloseButton: styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
  `,
};
