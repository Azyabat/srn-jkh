import { ReactNode } from "react";

export enum ToastVariantMessage {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFORMATION = "information",
}

export type ToastProps = {
  message: ReactNode;
  variant: ToastVariantMessage;
  close: () => void;
};

export type ToastType = {
  message: ReactNode;
  variant: ToastVariantMessage;
  id: number;
};
