import MainLayout from '../layout/MainLayout';
import SidebarRightLayout from "../layout/SidebarRightLayout";
import ListLayout from "../layout/ListLayout";
import SidebarLeftLayout from "../layout/SidebarLeftLayout";
import {NavbarLink} from "../layout/Header";
import Match from "../match";
import MatchList from "../../components/MatchList";

function Main() {
  return (
    <MainLayout>
        <div>main</div>
        <SidebarLeftLayout>
            <div>side left rank</div>
        </SidebarLeftLayout>
        <SidebarRightLayout>
            <div>side right rank</div>
        </SidebarRightLayout>
        <ListLayout>
            <MatchList/>
            <NavbarLink to="/match"><button>list 더보기</button></NavbarLink>
        </ListLayout>
    </MainLayout>
  );
}

export default Main;
