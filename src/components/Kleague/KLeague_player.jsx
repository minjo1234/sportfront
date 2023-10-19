import React, { useState, useEffect } from "react";
import axios from "axios";

export default function KLeague_player() {
  const [playerdata, setPlayerData] = useState([]);
  const [playerDetail, setPlayerDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/kLeague/player");
        setPlayerData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPlayerDetail = async (k_league_player_id) => {
      try {
        const response = await axios.get(
          `/kLeague/player/${k_league_player_id}`
        );
        setPlayerDetail(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (playerDetail) {
      fetchPlayerDetail(playerDetail.k_league_player_id);
    }
  }, [playerDetail]);

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
    width: "80%",
    borderTop: "1px solid #929292",
    justifyContent: "space-between", // Add this line
    background: "#fff",
  };

  const listItemStyle = {
    display: "flex", // 가로로 배열
    margin: "5px", // 아이템 간격
  };

  const pStyle = {
    padding: "10px", // Adjust the padding as needed
    lineHeight: "1.5", // Adjust the line height as needed
  };

  const pStyleElement = {
    padding: "21px", // Adjust the padding as needed
    lineHeight: "1.5", // Adjust the line height as needed
  };

  const showPlayerDetail = (data) => {
    setPlayerData(data);
    fetchPlayerDetail(data.k_league_player_id);
  };

  return (
    <div>
      <div style={commonStyle}>
        <p style={pStyle}>팀 명</p>
        <p style={pStyle}>팀 이름</p>
        <p style={pStyle}>번호</p>
        <p style={pStyle}>사진</p>
      </div>
      <div>
        {playerdata.map((data, index) => (
          <div
            key={index}
            style={{ ...commonStyle, marginTop: "10px" }}
            onClick={() => showPlayerDetail(data)}
          >
            <p>{data.k_league_player_id}</p>
            <p>{data.k_league_player_team}</p>
            <p>{data.k_league_player_name}</p>
            <p>{data.k_league_player_num}</p>
            <p>
              <img
                src={data.k_league_player_img_url}
                width="200px"
                height="200px"
              />
            </p>
          </div>
        ))}
        {playerDetail && (
          <div>
            <p>detail정보 확인완료 </p>
          </div>
        )}
      </div>
    </div>
  );
}
