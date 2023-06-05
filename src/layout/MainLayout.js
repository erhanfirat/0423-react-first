import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Greeting from "../components/Greeting";
import CounterPage from "../pages/CounterPage";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

import "./MainLayout.css";

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
        <div className="side-bar">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  style={(isActive) => {
                    if (isActive) {
                      return {
                        background: "#333",
                        color: "#eee",
                      };
                    } else {
                      return {};
                    }
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  exact
                  style={(isActive) => {
                    if (isActive) {
                      return {
                        background: "#333",
                        color: "#eee",
                      };
                    } else {
                      return {};
                    }
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/counter"
                  style={(isActive) => {
                    if (isActive) {
                      return {
                        background: "#333",
                        color: "#eee",
                      };
                    } else {
                      return {};
                    }
                  }}
                >
                  Counter
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content-area">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter" exact>
              <CounterPage />
            </Route>
            <Route path="/products" exact>
              <ProductPage products={props.products} />
            </Route>

            <Route path="/product-detail/:productId" exact>
              <ProductDetailPage products={props.products} />
            </Route>

            
          </Switch>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
