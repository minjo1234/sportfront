import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main';
import Community from './pages/community';
import Login from './pages/login';
import MyPage from './pages/mypage';
import Join from "./pages/join";
import Match from "./pages/match";
import Chat from "./pages/chat";
import Team from "./pages/team";
import Current from "./pages/current";
import KLeagueTeam from "./components/Team/KLeagueTeam";
import KleagueTeam from "./pages/Kleague";
import SignUp from "./components/SignUp";
import KBO from "./pages/kbo";

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
        path: 'team',
        element: <Team/>
      },
      {
        path: 'current',
        element: <Current/>,
      },
      {
        path: '/kLeague/team',
        element : <KleagueTeam/> ,
      },
      {
        path: '/KBO',
        element : <KBO/> ,
      }
    ],

  },

]);

export default Router;
