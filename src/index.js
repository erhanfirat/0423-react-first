import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CounterProvider from "./context/CounterProvider";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// BrowserRouter: Sağlayıcı / Provider

root.render(
  // sağlayıcı: React'e redux store ı bağlıyor
  <Provider store={store}>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </Provider>
);
