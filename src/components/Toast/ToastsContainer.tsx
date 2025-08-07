import { toastContainerId } from "./consts";

export const ToastsContainer = () => {
  return (
    <div
      id={toastContainerId}
      data-testid={toastContainerId}
      style={{
        position: "fixed",
        top: "40px",
        right: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 999,
      }}
    />
  );
};
