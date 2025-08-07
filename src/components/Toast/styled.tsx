import styled from "styled-components";

export const ToastWrapper = styled.div`
  @keyframes slidein {
    0% {
      transform: translateX(100%);
    }
    60% {
      transform: translateX(-15%);
    }
    80% {
      transform: translateX(5%);
    }
    80% {
      transform: translateX(0);
    }
  }

  box-sizing: border-box;
  width: 460px;
  padding: 16px 16px 12px 16px;
  border-radius: 8px;
  background-color: white;
  animation-name: slidein;
  animation-duration: 0.35s;
  box-shadow: 0px 10px 30px 0px rgba(16, 31, 41, 0.3);
`;
