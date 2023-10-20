import MainLayout from "../layout/MainLayout";
import MatchList from "../../components/MatchList";
import CurrentKbo from "../../components/CurrentGame/CurrentKbo";

function Match() {
  return (
    <MainLayout>
      <CurrentKbo />
    </MainLayout>
  );
}

export default Match;
