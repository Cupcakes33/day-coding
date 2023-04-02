import { atom } from "recoil";

export interface ModalState {
  isOpen: boolean;
  title: string;
  contents: string;
  callback: (() => void) | null;
}

export const modalAtom = atom<ModalState>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    contents: "",
    callback: null,
  },
});