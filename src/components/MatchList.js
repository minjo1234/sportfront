import styled from "styled-components";
import { NavbarLink } from "../pages/layout/Header";
import {Link} from "react-router-dom";

const MatchList = () => {
  return (
    <>
      <div>Matches</div>
      <ul>
        <li>
          match 1
          <Link to="/chat" state={{ channelId: 1 }}>
            <button>enter</button>
          </Link>
        </li>
        <li>
          match 2
          <Link to="/chat" state={{ channelId: 2 }}>
            <button>enter</button>
          </Link>
        </li>
        <li>
          match 3
          <Link to="/chat" state={{ channelId: 3 }}>
            <button>enter</button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MatchList;
