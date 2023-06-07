import { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import Greeting from "../components/Greeting";
import CounterPage from "../pages/CounterPage";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

import "./MainLayout.css";
import CreateProductPage from "../pages/CreateProductPage";
import CreateProductYupPage from "../pages/CreateProductYupPage";

const userFormInitial = { email: "", password: "" };

const MainLayout = (props) => {
  const [show, setShow] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userForm, setUserForm] = useState(userFormInitial);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const submitHandler = (e) => {
    e.preventDefault();
    // axios.post("endpoint", formData);
    console.log("submitHandler > userForm: ", userForm);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserForm({ ...userForm, [name]: value });

    // setUserForm({ email: userForm.email, passsword: userForm.passsword, [name]: value });
  };

  const resetForm = () => {
    setUserForm(userFormInitial);
  };

  useEffect(() => {
    console.log("userForm: ", userForm);
  }, [userForm]);

  return (
    <div className="main-layout">
      <header>
        <Greeting user={props.userName} age={props.userAge} nickName="sss" />

        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={inputChangeHandler}
            value={userForm.email}
            placeholder="Email giriniz..."
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={inputChangeHandler}
            value={userForm.password}
          />
          <button type="submit">Login</button>
          <button type="button" onClick={resetForm}>
            Reset Form
          </button>
        </form>
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
                  to="/create-product"
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
                  Create Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create-product-yup"
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
                  Create Product Yup
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

            <Route path="/create-product" exact>
              <CreateProductPage />
            </Route>

            <Route path="/create-product-yup" exact>
              <CreateProductYupPage />
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
