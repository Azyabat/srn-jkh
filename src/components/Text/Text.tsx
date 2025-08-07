"use client";

import styled from "styled-components";

type TextProps = {
  $fontSize?: number;
  $color?: string;
  $fontWeight?: number;
};

export const Text = styled.span<TextProps>`
  font-size: ${({ $fontSize }) => ($fontSize || 12) + "px"};
  color: ${({ $color }) => $color || "black"};
  font-weight: ${({ $fontWeight }) => $fontWeight || 300};
`;
