import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  min-width: 1440px;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: row;
  flex-direction: column;
`;

const HeaderBar = styled.header`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e6fa;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FooterBar = styled.div`
  width: 100%;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(10, 11, 18);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  border-bottom-color: rgb(18, 19, 32);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-left-color: rgb(18, 19, 32);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(18, 19, 32);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(18, 19, 32);
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  clear: both;
  color: rgb(102, 102, 102);
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕",
    "Apple SD Gothic Neo", helvetica, sans-serif;
  font-size: 11px;
  letter-spacing: -0.7px;
  line-height: 13.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-width: 1440px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 18px; /* 조정된 부분: 원래의 36px의 1/2 값 */
  text-align: center;
  width: 1440px;
`;

const MainLayout = ({ children }) => {
  return (
    <Container>
      <HeaderBar>
        <Header />
      </HeaderBar>
      <Content>{children}</Content>
      <FooterBar>
        <Footer />
      </FooterBar>
    </Container>
  );
};

export default MainLayout;
