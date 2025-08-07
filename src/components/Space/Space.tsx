"use client";

import { CSSProperties } from "react";
import styled from "styled-components";

type SpaceProps = {
  $direction?: "vertical" | "horizontal";
  $size?: number;
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $reverse?: boolean;
  $flexWrap?: CSSProperties["flexWrap"];
  $width?: string;
};

export const Space = styled.div<SpaceProps>`
  display: flex;
  gap: ${({ $size }) => `${$size ?? 8}px`};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  width: ${({ $width }) => $width || "100%"};
  flex-direction: ${({ $direction, $reverse }) =>
    $direction === "vertical"
      ? "column" + ($reverse ? "-reverse" : "")
      : "row" + ($reverse ? "-reverse" : "")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : "normal"};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "normal")};
`;
