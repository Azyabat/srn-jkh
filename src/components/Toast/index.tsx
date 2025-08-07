import { Root, createRoot } from "react-dom/client";
import { ReactNode } from "react";
import { Toast } from "./Toast";
import { toastContainerId } from "./consts";
import { ToastVariantMessage } from "./types";

let root: Root | null = null;

let toasts: {
  content: ReactNode;
  key: string;
  variant: ToastVariantMessage;
}[] = [];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const toastCommands: Record<ToastVariantMessage, (content: ReactNode) => void> =
  {};

function shouldRemoveAndRender(key: string) {
  toasts = toasts.filter((toast) => toast.key !== key);

  renderToasts();
}

function renderToasts() {
  if (!root) {
    root = createRoot(document.getElementById(toastContainerId)!);
  }

  root.render(
    toasts.map((toast) => {
      setTimeout(() => {
        shouldRemoveAndRender(toast.key);
      }, 4000);

      return (
        <Toast
          key={toast.key}
          message={toast.content}
          variant={toast.variant}
          close={() => {
            shouldRemoveAndRender(toast.key);
          }}
        />
      );
    }),
  );
}

Object.values(ToastVariantMessage).forEach((variant) => {
  toastCommands[variant] = (content: ReactNode) => {
    toasts.push({ content: content, variant, key: Date.now() + "" });
    renderToasts();
  };
});

export default toastCommands;
