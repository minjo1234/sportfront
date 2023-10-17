import React from "react";
import styled from "styled-components";

const CopyrightInfo = () => {
  return (
    <CopyrightContainer>
      <p>&copy; 2023 Baseball Analysis Informaition Website.</p>
    </CopyrightContainer>
  );
};

export default CopyrightInfo;

export const CopyrightContainer = styled.div`
  text-align: center;
  color: #666;
`;
