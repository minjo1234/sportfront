import { Link } from "react-router-dom";

export default function TeamLogoPath() {
  return (
    <nav>
      <h2>team icon</h2>
      <ul>
        <li>
          <Link to="/KBO" state={{ teamFilter: "LG" }}>
            <button>LG</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "KT" }}>
            <button>KT</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "NC" }}>
            <button>NC</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "두산" }}>
            <button>두산</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "SSG" }}>
            <button>SSG</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "KIA" }}>
            <button>KIA</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "롯데" }}>
            <button>롯데</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "한화 " }}>
            <button>한화</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "삼성" }}>
            <button>삼성</button>
          </Link>
        </li>
        <li>
          <Link to="/KBO" state={{ teamFilter: "키움" }}>
            <button>키움</button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague/team">
            <button>kLeagueTeam</button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague/player">
            <button>kLeaguePlayer</button>
          </Link>
        </li>
        <li>
          <Link to="/KLeague/current">
            <button>kLeagueCurrent</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
