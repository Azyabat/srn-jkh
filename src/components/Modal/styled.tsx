"use client";

import styled from "styled-components";

export const ModalWrapper = styled.div<{ $width?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 10;
  width: ${({ $width }) => ($width ? $width : "fit-content")};
  padding: 24px 32px 28px 32px;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const BackgroundWrapper = styled.div`
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 100;
  position: absolute;
`;

export const HeaderModal = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 18px;
    color: #2b2b2b;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;

    &:last-child {
      cursor: pointer;
    }
  }
`;

export const ContentModal = styled.div``;
