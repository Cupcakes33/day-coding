import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { modalAtom, ModalState } from "../atom/modalAtoms";

interface UseModal {
  modalState: ModalState;
  closeModal: () => void;
  openModal: (options: Omit<ModalState, "isOpen">) => void;
}

const useModal = (): UseModal => {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  const closeModal = useCallback(() => {
    setModalState((prev) => {
      return { ...prev, isOpen: false };
    });
  }, [setModalState]);

  const openModal = useCallback(
    ({ title, contents, callback }: Omit<ModalState, "isOpen">) => {
      setModalState({
        isOpen: true,
        title: title,
        contents: contents,
        callback: callback,
      });
    },
    [setModalState]
  );

  return { modalState, closeModal, openModal };
};

export default useModal;