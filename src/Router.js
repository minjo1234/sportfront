import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main';
import Community from './pages/community';
import Login from './pages/login';
import MyPage from './pages/mypage';
import Join from "./pages/join";
import Match from "./pages/match";
import Chat from "./pages/chat";
import Current from "./pages/current";
import KLeagueTeamView from "./pages/Info/KLeague/KLeagueTeamView";
import KboTeamView from "./pages/Info/KboTeam/KboTeamView";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'join',
        element: <Join />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      },
      {
        path: 'match',
        element: <Match />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: '/kbo/team',
        element: <KboTeamView/>
      },
      {
        path: 'current',
        element: <Current/>,
      },
      {
        path: '/kLeague/team',
        element : <KLeagueTeamView/> ,
      }
    ],

  },

]);

export default Router;
