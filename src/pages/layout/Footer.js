import React from 'react';
import styled from 'styled-components';
import CopyrightInfo from '../../components/CopyrightInfo';

const Footer = () => {
    return (
        <>
            <FooterSection>(정)국내야구분석사이트</FooterSection>
            <FooterSection>서비스 소개</FooterSection>
            <FooterSection>청소년보호정책</FooterSection>
            <FooterSection>사업자 이메일: Lucky7@seven.com</FooterSection>
            <CopyrightInfo />
        </>

    );
};

export default Footer;

const FooterSection = styled.div`
  margin-bottom: 5px;
  color: #666;
`;