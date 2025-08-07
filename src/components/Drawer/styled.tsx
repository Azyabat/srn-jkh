import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 250;
  position: absolute;
`;

export const DrawerWrapper = styled.div<{
  $width?: string;
  $isClose?: boolean;
}>`
  @keyframes showDrawer {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes hideDrawer {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  position: fixed;
  width: ${({ $width }) => ($width ? $width : "fit-content")};
  background: white;
  color: white;
  z-index: 10;
  padding: 24px 32px;
  box-sizing: border-box;
  box-shadow:
    0px 0px 1px 0px rgba(16, 31, 41, 0.32),
    0px 9px 20px 0px rgba(16, 31, 41, 0.2);
  right: 0;
  height: calc(100% - 29px);
  bottom: 0;
  animation: ${({ $isClose }) =>
    ($isClose ? "hideDrawer" : "showDrawer") +
    " 0.5s ease 0s 1 normal forwards"};
`;

export const HeaderDrawer = styled.div`
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

export const ContentDrawer = styled.div`
  /* 48px padding top, bottom. 61px - footer (16px padding + content) */
  max-height: calc(100% - 48px - 61px);
  min-height: calc(100% - 48px - 61px);
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const FooterWrapper = styled.div`
  padding-top: 16px;
  border-top: 1px solid #e2eaf2;
`;
