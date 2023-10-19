import MainLayout from '../layout/MainLayout';
import {NavbarLink} from "../layout/Header";
import MatchList from "../../components/MatchList";
import "./main.css";
import {Link} from "react-router-dom";
import styled from "styled-components";
function Main() {
  return (
    <MainLayout>
        <MainContainer>
            <Box>
                <nav>
                    <h5>team icon</h5>
                    <font>(click available)</font>
                </nav>
            </Box>

            <Box>
                <MatchList/>
                <Link to="/match"><button>list 더보기</button></Link>
            </Box>

            <Box><p>article</p></Box>
            <Box><p>rank</p></Box>
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
  grid-template-rows: 1fr 1fr;/* 각 행(세로줄)의 길이 */
  gap: 10px;
`

export const Box = styled.div`
  background: #202030;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: 1px solid #202030;
  text-align: center;
  border-radius: 10px;
  &:nth-child(1){
    grid-row:1/ span 2;
  }
  &:nth-child(2){
    grid-row:1/ span 2;
  }
`
