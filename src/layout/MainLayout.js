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
import CreateProductHookPage from "../pages/CreateProductHookPage";
import CounterReducerPage from "../pages/CounterReducerPage";

export const userFormInitial = { email: "", password: "" };

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

  const navLinkAcitve = (isActive) => {
    if (isActive) {
      return {
        background: "#333",
        color: "#eee",
      };
    } else {
      return {};
    }
  };

  useEffect(() => {
    console.log("userForm: ", userForm);
  }, [userForm]);

  useEffect(() => {
    console.log("[useEffect] > MainLayout Did Mount!");
  }, []);

  useEffect(() => {
    // yeni renderı yakalar!
    // component update fazı
  }, [show, dropdownOpen, userForm, props]);

  return (
    <div className="main-layout">
      <header className="border-4 border-orange-400 rounded-2xl bg-amber-800 text-slate-200">
        {show && (
          <Greeting user={props.user} nickName="sss">
            <span>Children alanından merhabalar</span>
          </Greeting>
        )}

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
                <NavLink to="/" exact style={navLinkAcitve}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  exact
                  data-cy="product-link"
                  style={navLinkAcitve}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/create-product" exact style={navLinkAcitve}>
                  Create Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/create-product-yup" exact style={navLinkAcitve}>
                  Create Product Yup
                </NavLink>
              </li>
              <li>
                <NavLink to="/create-product-hook" exact style={navLinkAcitve}>
                  Create Product Hook
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/counter" style={navLinkAcitve}>
                  Counter
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/counter-reducer" style={navLinkAcitve}>
                  Counter Reducer
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
            <Route path="/counter-reducer" exact>
              <CounterReducerPage />
            </Route>
            <Route path="/products" exact>
              <ProductPage products={props.products} />
            </Route>

            <Route path="/create-product" exact component={CreateProductPage} />

            <Route path="/create-product-yup" exact>
              <CreateProductYupPage />
            </Route>

            <Route path="/create-product-hook" exact>
              <CreateProductHookPage />
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
