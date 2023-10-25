import MainLayout from "../layout/MainLayout";
import MatchList from "../../components/MatchList";
import KBOLogoPath from "../../components/KBOLogoPath";
import {Link} from "react-router-dom";
import NewsLatest from "../../news/NewsLatest";
import styled from "styled-components";
import CurrentKbo from "../../components/CurrentGame/CurrentKbo";
import KLeagueLogoPath from "../../components/KLeagueLogoPath";
import Intro from '../layout/Intro'; 

function Main() {
  return (
      <MainLayout>
        <MainContainer>
             <Intro/>
            <FirstBox>
                <KBOLogoPath /> {/*팀 로고*/}
                <KLeagueLogoPath />
            </FirstBox>


            <SecondBox>
              <MatchList />
              <Link to="/match">
                  <CurrentKbo/>
                <button>list 더보기</button>
              </Link>
            </SecondBox>

            <ThirdBox>
              <p>article</p>
              <p>최신 뉴스</p>
              <Link to="/articles">
                <button>뉴스 더보기</button>
                <NewsLatest/>
              </Link>
            </ThirdBox>

            <FourthBox>
              <p>rank</p>

            </FourthBox>
      </MainContainer>
    </MainLayout>


  );
}

export default Main;

export const MainContainer = styled.div`
  width: 100%;
  height: 250vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap; // flex 아이템을 여러 줄에 걸쳐 정렬하기 위해 flex-wrap 속성 추가
  gap: 10px;
`;

export const FirstBox = styled.div`
  width: 10%;
  height: 100vh;
  background: #202026;
  padding: 40px;
  font-size: 20px;
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 10px;
  &:nth-child(1) {
    flex: 0.5;
    height: auto;
    position: relative;
  }
  //&:nth-child(2) {
  //  grid-row: 1 / span 2;
  //}
  &:nth-child(3) {
    display: flex;
    flex-direction: column;
  }
  &:nth-child(3) > * {
    flex: 1;
  }
<<<<<<< HEAD
`;


=======
  &:nth-child(3) {
    .article-title{
      font-size: 30px;
      color: #cccccc;
      flex: 1; /* 나머지 공간을 최신 뉴스 텍스트에 할당 */
      margin-top: 20px; /* 최신 뉴스와 버튼 사이 간격 설정 */
    }
    
`;
>>>>>>> 5f4c8c39fdacd854ea534824bcbbacc81b6c9879
