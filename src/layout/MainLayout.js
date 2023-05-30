import Counter from "../components/Counter";
import CounterNoState from "../components/CounterNoState";
import Greeting from "../components/Greeting";
import CounterPage from "../pages/CounterPage";

import "./MainLayout.css";

const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <header>
        <Greeting user={props.userName} age={props.userAge} nickName="sss" />
      </header>
      <div className="content-container">
        <div className="side-bar"></div>
        <div className="content-area">
          <CounterPage />
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
