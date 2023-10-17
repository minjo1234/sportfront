import React from "react";
import styled from "styled-components";

function SidebarLayout({ children }) {
  return <Content>{children}</Content>;
}

export default SidebarLayout;

const Content = styled.div`
  width: 10%;
  height: calc(100vh - 68px); /* 68px은 상단 헤더의 높이를 나타냅니다. */
  background-color: #ffffcc;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 24px 4px 48px 10px;
  overscroll-behavior: contain;
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕",
    "Apple SD Gothic Neo", helvetica, sans-serif;
  line-height: 1.2;
  letter-spacing: -0.7px;
  color: #666;
  border: 1px solid black; /* 예시로 테두리 추가 */
  float: left;
`;
