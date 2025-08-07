"use client";

import { Loader } from "lucide-react";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const StyledInput = styled.input<{
  $hasPostfix: boolean;
  $isError: boolean;
}>`
  width: 100%;
  padding: 10px 12px;
  padding-right: ${(props) => (props.$hasPostfix ? "40px" : "12px")};
  border: 1px solid ${(props) => (props.$isError ? "#e53935" : "#ccc")};
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease;

  &:focus {
    border-color: ${(props) => (props.$isError ? "#e53935" : "#007acc")};
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;

export const Postfix = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  height: 100%;
  color: #555;
  font-size: 14px;
  pointer-events: auto;

  & > * {
    cursor: pointer;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled(Loader)`
  animation: ${rotate} 1s linear infinite;
`;
