import React, { useState, useEffect } from "react";
import axios from "axios";

export default function KLeaguePlayer({ teamFilter }) {
  const [playerData, setPlayerData] = useState([]);
  const [playerDetail, setPlayerDetail] = useState(null);
  const [detailFetched, setDetailFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 12; // 한 페이지에 보여줄 선수 수를 조절하세요.
  const [allPlayerData, setAllPlayerData] = useState([]); // 모든 선수 데이터를 보관
  const [detailImg, setDetailImg] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/kLeague/player");
        setPlayerData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const fetchPlayerDetail = async (k_league_player_id) => {
    try {
      const response = await axios.get(`/kLeague/player/${k_league_player_id}`);
      setPlayerDetail(response.data);
      setDetailImg(k_league_player_img_url);
      setDetailFetched(true);
    } catch (err) {
      console.error(err);
    }
  };

  const clearPlayerDetail = () => {
    setPlayerDetail(null);
    setDetailFetched(false);
  };

  const commonStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#222",
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: 0,
    font: "inherit",
    verticalAlign: "baseline",
    borderCollapse: "collapse",
    borderSpacing: 0,
    width: "100%",
    borderTop: "1px solid #929292",
    justifyContent: "space-between",
    background: "#fff",
  };

  const pStyle = {
    padding: "10px",
    lineHeight: "1.5",
  };

  const playerDetailList = {
    fontSize: "80px",
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    background: "#fff",
  };

  const showPlayerDetail = (data) => {
    if (
      !detailFetched ||
      playerDetail.k_league_player_id !== data.k_league_player_id
    ) {
      fetchPlayerDetail(data.k_league_player_id, data.k_league_player_img_url);
    } else {
      clearPlayerDetail();
    }
  };


  return (
    <div>
      <div style={commonStyle}>
        <p style={pStyle}>팀 명</p>
        <p style={pStyle}>팀 이름</p>
        <p style={pStyle}>번호</p>
        <p style={pStyle}>사진</p>
        <p style={pStyle}>디테일</p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={playerListStyle}>
          {currentPlayers.map((data, index) => (
            <div
              key={index}
              style={playerStyle}
              onClick={() => showPlayerDetail(data)}
            >
              <p>{data.k_league_player_team}</p>
              <p>{data.k_league_player_name}</p>
              <p>{data.k_league_player_num}</p>
              <p>
                <img
                  src={data.k_league_player_img_url}
                  style={playerImageStyle}
                  alt={data.k_league_player_name}
                />
              </p>
            </div>
          ))}
        </div>
        {playerDetail && (
          <div style={{ display: "flex" }}>
            <div style={{ width: "70%", marginLeft: "10px" }}>
              <div
                style={{
                  ...playerDetailList,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>
                  <strong>이름:</strong> {playerDetail.player_name}
                </p>
                <p>
                  <strong>팀:</strong> {playerDetail.player_team}
                </p>
                <p>
                  <strong>등번호:</strong> {playerDetail.player_number}
                </p>
                <p>
                  <strong>포지션:</strong> {playerDetail.player_position}
                </p>
                <p>
                  <strong>국적:</strong> {playerDetail.player_nationality}
                </p>
                <p>
                  <strong>사진:</strong>
                  <img src={detailImg} style={playerImageStyle} />
                </p>
                <p>
                  <strong>키:</strong> {playerDetail.player_height}
                </p>
                <p>
                  <strong>몸무게:</strong> {playerDetail.player_weight}
                </p>
                <p>
                  <strong>생년월일:</strong> {playerDetail.player_birthdate}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{ fontSize: "20px" }}
        >
          이전 페이지
        </button>
        {pageNumbers.map((number) => {
          if (number >= startPage && number <= endPage) {
            return (
              <button
                key={number}
                style={{
                  fontSize: "20px",
                  margin: "5px",
                  backgroundColor: currentPage === number ? "#aaa" : "inherit",
                }}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            );
          }
          return null;
        })}
        <button
          onClick={nextPage}
          disabled={indexOfLastPlayer >= playerData.length}
          style={{ fontSize: "20px" }}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}
