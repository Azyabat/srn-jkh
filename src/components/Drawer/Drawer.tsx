"use client";

import { FC, useEffect, useState } from "react";
import { Space } from "../Space";
import {
  BackgroundWrapper,
  ContentDrawer,
  DrawerWrapper,
  FooterWrapper,
  HeaderDrawer,
} from "./styled";
import { DrawerProps } from "./types";

export const Drawer: FC<DrawerProps> = ({
  children,
  onClose,
  headerText,
  width,
  cancelText,
  footer,
}) => {
  const bodyRef = document.getElementsByTagName("body")[0];
  const [isClose, setClose] = useState(false);

  useEffect(() => {
    bodyRef.style.overflow = "hidden";

    return () => {
      bodyRef.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setClose(true);

    setTimeout(() => {
      setClose(false);
      onClose();
    }, 500);
  };

  return (
    <BackgroundWrapper>
      <DrawerWrapper
        $width={width}
        $isClose={isClose}
        data-testid="drawer-wrapper"
      >
        <HeaderDrawer>
          <span>{headerText}</span>
          <span onClick={handleClose}>X</span>
        </HeaderDrawer>
        <ContentDrawer>{children}</ContentDrawer>
        <FooterWrapper>
          <Space $size={0} $justifyContent="space-between">
            <>{footer}</>
            <button onClick={handleClose}>{cancelText ?? "Отмена"}</button>
          </Space>
        </FooterWrapper>
      </DrawerWrapper>
    </BackgroundWrapper>
  );
};
