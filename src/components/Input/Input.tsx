import React, { CSSProperties } from "react";
import { Space } from "../Space";
import { Text } from "../Text";
import { Postfix, Spinner, StyledInput, Wrapper } from "./styled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelAlign?: CSSProperties["alignItems"];
  postfix?: React.ReactNode;
  $isError?: boolean;
  isLoading?: boolean;
};

export const Input: React.FC<InputProps> = ({
  postfix,
  type = "text",
  $isError = false,
  isLoading = false,
  label,
  labelAlign,
  ...props
}) => {
  return (
    <Space $direction="vertical" $size={6} $alignItems={labelAlign}>
      {label && (
        <Text $fontSize={16} $fontWeight={400}>
          {label}
        </Text>
      )}
      <Wrapper>
        <StyledInput
          type={type}
          $hasPostfix={!!postfix || isLoading}
          $isError={$isError}
          {...props}
        />
        {(isLoading || postfix) && (
          <Postfix>{isLoading ? <Spinner size={16} /> : postfix}</Postfix>
        )}
      </Wrapper>
    </Space>
  );
};
