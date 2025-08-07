import { FC } from "react";
import { VariantsColors, VariantsText } from "./consts";
import { ToastWrapper } from "./styled";
import { ToastProps } from "./types";
import { Text } from "../Text";
import { Space } from "../Space";

export const Toast: FC<ToastProps> = ({ message, close, variant }) => {
  const preparedMessage =
    typeof message === "string" ? message.replaceAll("</br>", "\n") : message;

  return (
    <ToastWrapper>
      <Space $direction="vertical" $size={8}>
        <Space $justifyContent="space-between">
          <Space $size={8} $alignItems="center">
            {/* {variant === ToastVariantMessage.SUCCESS && <CheckedIcon />}
            {variant === ToastVariantMessage.WARNING && <WarningIcon />}
            {variant === ToastVariantMessage.ERROR && <ErrorIcon />}
            {variant === ToastVariantMessage.INFORMATION && <InformationIcon />} */}
            <Text
              $fontSize={14}
              $fontWeight={600}
              $color={VariantsColors[variant]}
            >
              {VariantsText[variant]}
            </Text>
          </Space>
          <button onClick={close}>X {/* <CloseIcon /> */}</button>
        </Space>
        <div style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
          {preparedMessage}
        </div>
      </Space>
    </ToastWrapper>
  );
};
