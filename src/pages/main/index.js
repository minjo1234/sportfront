import MainLayout from "../layout/MainLayout";
import MatchList from "../../components/MatchList";
import TeamLogoPath from "../../components/TeamLogoPath";
import {Link} from "react-router-dom";
import NewsLatest from "../../news/NewsLatest";

import styled from "styled-components";
function Main() {
  return (
    <MainLayout>
        <MainContainer>
            <Box>
                <TeamLogoPath /> {/*팀 로고*/}
            </Box>

            <Box>
              <MatchList />
              <Link to="/match">
                <button>list 더보기</button>
              </Link>
            </Box>

            <Box>
              <p>최신 뉴스</p>
              <Link to="/articles">
                <button>뉴스 더보기</button>
                <NewsLatest/>
              </Link>
            </Box>
            <Box>
              <p>rank</p>
            </Box>
      </MainContainer>
    </MainLayout>
  );
}

export default Main;

export const MainContainer = styled.div`
  width: 95%;
  height: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 0.3fr 2fr 1fr;
  grid-template-rows: 1fr 1fr; /* 각 행(세로줄)의 길이 */
  gap: 10px;
`;

export const Box = styled.div`
  background: #333333;
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
