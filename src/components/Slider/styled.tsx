import styled from "styled-components";

export const SliderWrapper = styled.div<{ $width?: string }>`
  position: relative;
  width: ${(props) => (props.$width ? props.$width : "100%")};
  max-width: ${({ $width }) => ($width ? $width : "800px")};
  overflow: hidden;
  margin: 0 auto;
  border-radius: 12px;
`;

export const SliderTrack = styled.div<{ $activeIndex: number }>`
  display: flex;
  transition: transform 0.6s ease;
  transform: translateX(${(props) => `-${props.$activeIndex * 100}%`});
`;

export const Slide = styled.div<{ $height?: string }>`
  flex: 0 0 100%;
  height: ${(props) => (props.$height ? props.$height : "auto")};
  background: #e5f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #003e6b;
  font-weight: 500;
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  border: none;
  background: ${(props) => (props.$active ? "#007acc" : "#ccc")};
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #007acc;
  }
`;
