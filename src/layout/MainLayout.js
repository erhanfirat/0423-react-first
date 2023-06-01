import { useState } from "react";
import Counter from "../components/Counter";
import CounterNoState from "../components/CounterNoState";
import Greeting from "../components/Greeting";
import CounterPage from "../pages/CounterPage";
import ProductPage from "../pages/ProductPage";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./MainLayout.css";
import StyledButton from "../components/StyledButton";

const MainLayout = (props) => {
  const [show, setShow] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="main-layout">
      <header>
        <Greeting user={props.userName} age={props.userAge} nickName="sss" />
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </header>
      <div className="content-container">
        <div className="side-bar"></div>
        <div className="content-area">
          <button className="btn btn-primary" onClick={() => setShow(!show)}>
            Show/hide Counter Component
          </button>
          <StyledButton color="primary" onClick={() => setShow(!show)}>
            Show/hide Counter Component
          </StyledButton>
          <StyledButton color="success" onClick={() => setShow(!show)}>
            Show/hide Counter Component
          </StyledButton>
          <StyledButton color="danger" onClick={() => setShow(!show)}>
            Show/hide Counter Component
          </StyledButton>
          <StyledButton color="warning" onClick={() => setShow(!show)}>
            Show/hide Counter Component
          </StyledButton>
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
