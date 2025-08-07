import { ReactNode } from "react";
import { ModalProps } from "../Modal/Modal";

export type DrawerProps = ModalProps & {
  footer?: ReactNode;
  cancelText?: string;
};
