export interface ModalProps {
  [key: string]: unknown;
}

export interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  modalProps: ModalProps;
}
