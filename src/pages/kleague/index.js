import React from "react";
import MainLayout from "../layout/MainLayout";
import styled from "styled-components";
import KLeagueLogoPath from "../../components/KLeagueLogoPath";
import KLeague_Data from "../../components/Kleague/KLeague_data";

export default function KLeague() {
  return (
    <MainLayout>
      <KLeagueContainer>
        <KLeagueBox>
          <KLeagueLogoPath />
        </KLeagueBox>
        <KLeagueBox>
          <KLeague_Data />
        </KLeagueBox>
      </KLeagueContainer>
    </MainLayout>
  );
}

export const KLeagueContainer = styled.div`
  width: 95%;
  height: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 0.3fr 2fr 1fr;
  grid-template-rows: 1fr 1fr; /* 각 행(세로줄)의 길이 */
  gap: 10px;
`;

export const KLeagueBox = styled.div`
  background: #202030;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: 1px solid #202030;
  text-align: center;
  border-radius: 10px;
  &:nth-child(1) {
    grid-row: 1 / span 2;
  }
  &:nth-child(2) {
    grid-row: 1 / span 2;
  }
`;
