import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/assets/scss/main.css";
import "../src/assets/scss/extraCss.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./assets/css/ReactToastify.min.css";
 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
      <ToastContainer />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
