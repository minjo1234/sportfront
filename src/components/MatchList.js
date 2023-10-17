import styled from "styled-components";
import { NavbarLink } from "../pages/layout/Header";

const MatchList = () => {
  return (
    <>
      <div>Matches</div>
      <ul>
        <li>
          match 1
          <NavbarLink to="/chat" state={{ channelId: 1 }}>
            <button>enter</button>
          </NavbarLink>
        </li>
        <li>
          match 2
          <NavbarLink to="/chat" state={{ channelId: 2 }}>
            <button>enter</button>
          </NavbarLink>
        </li>
        <li>
          match 3
          <NavbarLink to="/chat" state={{ channelId: 3 }}>
            <button>enter</button>
          </NavbarLink>
        </li>
      </ul>
    </>
  );
};

export default MatchList;
