import { ReactNode } from "react";
import { ModalProps } from "components/Modal/Modal";

export type DrawerProps = ModalProps & {
  footer?: ReactNode;
  cancelText?: string;
};
