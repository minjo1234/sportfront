import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../api/UserAPI';

const HeaderContainer = styled.div`
  background-color: #333333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const CommunityLink = styled(Link)`
  border-radius: 4px;
  background-color: #333333;
  font-weight: 400;
  color: #f8f3f3;
  padding: 12px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
`;

const MatchLink = styled(Link)`
  border-radius: 4px;
  background-color: #333333;
  font-weight: 400;
  color: #f8f3f3;
  padding: 12px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
`;

const NewsLink = styled(Link)`
  border-radius: 4px;
  background-color: #333333;
  font-weight: 400;
  color: #f8f3f3;
  padding: 12px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
`;

const TeamInfoLink = styled(Link)`
  border-radius: 4px;
  background-color: #333333;
  font-weight: 400;
  color: #f8f3f3;
  padding: 12px;
  width: 100px;
  text-align: left;
  cursor: pointer;
  font-size: 20px;
`;

const Header = () => {
  const [user, setUser] = useState({});
  const ACCESS_TOKEN = localStorage.getItem('accessToken');

  useEffect(() => {
    if (ACCESS_TOKEN) {
      fetchUser()
        .then((response) => {
          console.log(response);
          setUser(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ACCESS_TOKEN]);

  const handleLogout = async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenType');
    window.location.href = '/';
  };

  const dynamicContent = ACCESS_TOKEN ? (
    <Dropdown>
      <Dropth>{user.nickName}</Dropth>
      <DropdownContent>
        <DropdownContentLink to="/my-page">My Page</DropdownContentLink>
        <DropdownContentLink to="/" onClick={handleLogout}>
          Logout
        </DropdownContentLink>
      </DropdownContent>
    </Dropdown>
  ) : (
    <Dropdown>
      <Dropth>Log In</Dropth>
      <DropdownContent>
        <DropdownContentLink to="/login">Log In</DropdownContentLink>
        <DropdownContentLink to="/join">Sign Up</DropdownContentLink>
      </DropdownContent>
    </Dropdown>
  );

  return (
    <HeaderContainer>
      <div className="header">
        <HomeLink to="/">Home</HomeLink>
        <CommunityLink to="/Community">Community</CommunityLink>
        <MatchLink to="/Match">Match</MatchLink>
        <NewsLink to="/News">News</NewsLink>
        <TeamInfoLink to="/TeamInfo">TeamInfo</TeamInfoLink>
      </div>
      {dynamicContent}
    </HeaderContainer>
  );
};
export default Header;

export const Dropdown = styled.div`
  position: relative;
  margin-right: 100px;
  display: inline-block;
`
export const Dropth = styled.button`
  border : 1px solid #202025;
  border-radius : 4px;
  background-color: #202025;
  font-weight: 400;
  color : #ffff;
  padding : 12px;
  width :100px;
  text-align: left;
  cursor : pointer;
  font-size : 20px;
`

export const DropdownContent = styled.div`
  display : none;
  position : absolute;
  z-index : 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width : 100px;
  ${Dropdown}:hover &{
    display:block;
  }
`

export const DropdownContentLink = styled(Link)`
  display : block;
  text-decoration : none;
  color : rgb(37, 37, 37);
  font-size: 12px;
  padding : 12px 20px;
  &:hover{
    background-color : #ececec
  }
`
export const HomeLink = styled(Link)`
  border : 1px solid #202025;
  border-radius : 4px;
  background-color: #202025;
  font-weight: 400;
  color : #F8F3F3;
  padding : 12px;
  width :100px;
  text-align: left;
  cursor : pointer;
  font-size : 20px;
`
const HomeLi = styled.li`
  
`

