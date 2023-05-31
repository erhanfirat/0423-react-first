import { useState } from "react";
import Counter from "../components/Counter";
import CounterNoState from "../components/CounterNoState";
import Greeting from "../components/Greeting";
import CounterPage from "../pages/CounterPage";
import ProductPage from "../pages/ProductPage";

import "./MainLayout.css";

const MainLayout = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div className="main-layout">
      <header>
        <Greeting user={props.userName} age={props.userAge} nickName="sss" />
      </header>
      <div className="content-container">
        <div className="side-bar"></div>
        <div className="content-area">
          <button onClick={() => setShow(!show)}>
            Show/hide Counter Component
          </button>
          Conditional Rendering
          {show && <CounterPage />}
          <ProductPage products={props.products} />
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
