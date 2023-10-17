import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchUser } from "../../api/UserAPI";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [user, setUser] = useState({});
  const ACCESS_TOKEN = localStorage.getItem('accessToken');
  const [view, setView] = useState(false);

  useEffect(() => {
    if (ACCESS_TOKEN) {
      fetchUser()
          .then((response) => {
            setUser(response);
          }).catch((error) => {
        console.log(error);
      });
    }
  }, [ACCESS_TOKEN]);

  const handleLogout = async () => {
    localStorage.clear();
  }

  const onClickDown = (e) => {
    setView(!view);
  }

  return (
    <div className="header">
      <ul>
        <li><NavbarLink to="/">home</NavbarLink></li>
        {ACCESS_TOKEN
            ?
            <li onClick={onClickDown}>
              {user.name}님 환영합니다.
              {view? "^":"v"}
              {view &&
                  <ul>
                    <li><NavbarLink to="/my-page">마이페이지</NavbarLink></li>
                    <li><NavbarLink to="/" onClick={handleLogout}>로그아웃</NavbarLink></li>
                  </ul>
              }
            </li>
            :
            <li onClick={onClickDown}>
              로그인 필요
              {view? "-":"+"}
              {view &&
                  <ul>
                    <li><NavbarLink to="/login">로그인</NavbarLink></li>
                    <li><NavbarLink to="/join" >회원가입</NavbarLink></li>
                  </ul>
              }
            </li>
        }
      </ul>
    </div>
  );
};

export default Header;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`;

