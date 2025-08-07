import { FC, ReactNode } from "react";
import {
  BackgroundWrapper,
  ContentModal,
  HeaderModal,
  ModalWrapper,
} from "./styled";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  headerText: string;
  onClose: () => void;
  width?: string;
};

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  headerText,
  onClose,
  width,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <BackgroundWrapper>
      <ModalWrapper $width={width} data-testid="modal-wrapper">
        <HeaderModal>
          <span>{headerText}</span>
          <span onClick={onClose}>X</span>
        </HeaderModal>
        <ContentModal> {children}</ContentModal>
      </ModalWrapper>
    </BackgroundWrapper>
  );
};
