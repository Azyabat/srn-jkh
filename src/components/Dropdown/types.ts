import { ReactNode } from "react";

export type DropdownProps = {
  children: ReactNode;
  position?: "left" | "right" | "center";
  actions: ReactNode;
};
