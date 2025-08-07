import { FC } from "react";
import { Space } from "../Space";
import { Text } from "../Text";
import { Circle, Step, Wrapper } from "./styled";

interface Props {
  steps: string[];
}

export const Steps: FC<Props> = ({ steps }) => {
  return (
    <Wrapper>
      {steps.map((step, index) => (
        <Step
          key={index}
          $isFirst={index === 0}
          $isLast={index === steps.length - 1}
        >
          <Space $direction="vertical" $alignItems="center" $size={12}>
            <Circle>{index}</Circle>
            <Text
              $fontSize={16}
              $fontWeight={300}
              style={{ padding: "0px 16px" }}
            >
              {step}
            </Text>
          </Space>
        </Step>
      ))}
    </Wrapper>
  );
};
