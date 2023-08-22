import React from "react";
import ReactDOM from "react-dom/client";
import All from "./All";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <All />
    </BrowserRouter>
  </React.StrictMode>
);
