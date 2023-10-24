import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
// import SideBar from '../../components/SideBar';

const Container = styled.div`
  min-width: 100%;
  height: 1250px;
  background-color: white; /* 배경색을 흰색으로 설정 */
  display: flex;
  align-items: row;
  flex-direction: column;
`;

// const HeaderBar = styled.header`
//   width: 100%;
//   color: white;
//   padding: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
// `;

const Content = styled.div`
  width: 100%;
  height: 60%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const FooterBar = styled.div`
//   width: 100%;
//   background-attachment: scroll;
//   background-clip: border-box;
//   background-color: #17171b;
//   background-image: none;
//   background-origin: padding-box;
//   background-position-x: 0%;
//   background-position-y: 0%;
//   background-repeat: repeat;
//   background-size: auto;
//   box-sizing: border-box;
//   clear: both;
//   color: rgb(102, 102, 102);
//   font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕',
//     'Apple SD Gothic Neo', helvetica, sans-serif;
//   font-size: 11px;
//   letter-spacing: -0.7px;
//   line-height: 13.2px;
//   margin-bottom: 0px;
//   margin-left: 0px;
//   margin-right: 0px;
//   margin-top: 0px;
//   min-width: 1440px;
//   padding-bottom: 0px;
//   padding-left: 0px;
//   padding-right: 0px;
//   padding-top: 18px; /* 조정된 부분: 원래의 36px의 1/2 값 */
//   text-align: center;
// `;

const MainLayout = ({ children }) => {
  return (
    <Container>
        <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default MainLayout;
