"use client";

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Circle = styled.div`
  background: dodgerblue;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 24px;
  color: #fff;
`;

export const Step = styled.div<{ $isFirst?: boolean; $isLast?: boolean }>`
  position: relative;

  ${({ $isFirst }) => {
    if (!$isFirst) {
      return css`
        &::before {
          content: "";
          position: absolute;
          background: #ccc;
          top: 25px;
          right: calc(50% + 25px);
          transform: translateY(-50%);
          height: 2px;
          width: calc(50% - 25px);
        }
      `;
    }
  }}

  ${({ $isLast }) => {
    if (!$isLast) {
      return css`
        &::after {
          content: "";
          position: absolute;
          background: #ccc;
          top: 25px;
          left: calc(50% + 25px);
          transform: translateY(-50%);
          height: 2px;
          width: calc(50% - 25px);
        }
      `;
    }
  }}
`;
