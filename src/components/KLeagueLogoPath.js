import { Link } from "react-router-dom";
import { useState } from "react";
import "../CSS/KLeagueLogoPath.css";

export default function KLeagueLogoPath() {
  const [iskLeagueMenuOpen, setIskLeagueMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIskLeagueMenuOpen(!iskLeagueMenuOpen);
  };
  return (
    <nav>
      <button onClick={toggleMenu} className="kLeague-logo-button">
        <img
          src="https://www.kleague.com/assets/images/logo/logo.png"
          alt="KLeague Logo"
        />
      </button>
      <ul className={`kLeague-logo-list ${iskLeagueMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "울산" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K01.png"
                alt="Olsan Logo"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "포항" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K03.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "광주" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K22.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "전북" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K05.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "인천" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K18.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "대구" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K17.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "서울" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K09.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "대전" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K10.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "제주" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K04.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "수원FC" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K29.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "강원" }}>
            <button>
              <img
                src=" https://www.kleague.com/assets/images/emblem/emblem_K21.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/kLeague" state={{ teamFilter: "수원" }}>
            <button>
              <img
                src="https://www.kleague.com/assets/images/emblem/emblem_K02.png"
                alt="error"
              />
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
