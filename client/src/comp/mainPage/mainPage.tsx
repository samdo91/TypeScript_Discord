import MainHeader from "./mainHeader/mainHeader";
import PersistentLogin from "../../store/persistentLogin/persistentLogin";

function MainPage() {
  return (
    <div>
      <PersistentLogin />
      <header>
        <MainHeader />
      </header>
      MainPage
    </div>
  );
}

export default MainPage;
