import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Clock from 'react-live-clock';

const SideBarContainer = styled.div`
  background-color: #333333;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; /* 내용과 테두리 간의 여백을 조절할 수 있습니다. */
  box-sizing: border-box; /* 내용(padding)을 포함한 전체 크기를 유지합니다. */
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamListItem = styled.li`
  margin: 10px;
`;

const textStyle = {
  color: 'black', // 검은색 텍스트 색상
  overflow: 'hidden', // 텍스트가 넘칠 경우 숨김 처리
  whiteSpace: 'nowrap', // 텍스트 줄 바꿈 방지
  textOverflow: 'ellipsis' // 넘치는 텍스트에 '...' 표시
};

export default function TeamLogoPath() {
  const teams = [
    { name: "LG", id: "lg" },
    { name: "KT", id: "kt" },
    { name: "NC", id: "nc" },
    { name: "두산", id: "doosan" },
    { name: "SSG", id: "ssg" },
    { name: "KIA", id: "kia" },
    { name: "롯데", id: "lotte" },
    { name: "한화", id: "hanwha" },
    { name: "삼성", id: "samsung" },
    { name: "키움", id: "kiwoom" }
  ];

  return (
    <SideBarContainer>
      <h2>Team Icon</h2>
      <TeamList>
        {teams.map((team, index) => (
          <TeamListItem key={index}>
            <Link to={`/KBO/${team.id}`} state={{ teamFilter: team.name }}>
              <button style={textStyle}>{team.name}</button>
            </Link>
          </TeamListItem>
        ))}
      </TeamList>
      <div>
        현재 시간: <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} style={textStyle} />
      </div>
    </SideBarContainer>
  );
}