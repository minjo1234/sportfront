import MainLayout from '../layout/MainLayout';
import {NavbarLink} from "../layout/Header";
import MatchList from "../../components/MatchList";
import "./main.css";
function Main() {
  return (
    <MainLayout>
        <div className="container">
            <div className="box">
                <nav>
                    <h5>team icon</h5>
                    <font>(click available)</font>
                </nav>
            </div>

            <div className="box">
                <MatchList/>
                <NavbarLink to="/match"><button>list 더보기</button></NavbarLink>
            </div>

            <div className="box">
                <p>article</p>
            </div>

            <div className="box">
                <p>rank</p>
            </div>
        </div>
    </MainLayout>
  );
}

export default Main;
