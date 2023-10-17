import React from 'react';
import styled from 'styled-components';
import CopyrightInfo from '../../components/CopyrightInfo';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>(정)국내야구분석사이트</FooterSection>
            <FooterSection>서비스 소개</FooterSection>
            <FooterSection>청소년보호정책</FooterSection>
            <FooterSection>사업자 이메일: Lucky7@seven.com</FooterSection>
            <CopyrightInfo />
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(10, 11, 18);
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  border-bottom-color: rgb(18, 19, 32);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
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
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", "Apple SD Gothic Neo", helvetica, sans-serif;
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

const FooterSection = styled.div`
  margin-bottom: 5px;
  color: #666;
`;