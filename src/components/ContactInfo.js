import React from "react";
import styled from "styled-components";

const ContactInfo = () => {
  return (
    <ContactContainer>
      <ContactHeader>C:</ContactHeader>
    </ContactContainer>
  );
};

export default ContactInfo;

const ContactContainer = styled.div`
  text-align: left;
  color: #666;
`;

const ContactHeader = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #ff9900;
`;
