import React, { useState, useEffect } from "react";
import axios from "axios";

export default function KLeaguePlayer() {
  const [playerData, setPlayerData] = useState([]);
  const [playerDetail, setPlayerDetail] = useState(null);
  const [detailFetched, setDetailFetched] = useState(false);

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
      setPlayerDetail(response.data);
      console.log(response.data);
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
      fetchPlayerDetail(data.k_league_player_id);
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
        <div style={{ width: "70%" }}>
          {playerData.map((data, index) => (
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
                  alt={data.k_league_player_name}
                />
              </p>
            </div>
          ))}
        </div>
        {playerDetail && (
          <div style={{ width: "20%" }}>
            <div style={playerDetailList}>
              <p>{playerDetail.player_name}</p>
              <p>{playerDetail.player_team}</p>
              <p>{playerDetail.player_number}</p>
              <p>{playerDetail.player_position}</p>
              <p>{playerDetail.player_nationality}</p>
              <p>{playerDetail.player_height}</p>
              <p>{playerDetail.player_weight}</p>
              <p>{playerDetail.player_birthdate}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
