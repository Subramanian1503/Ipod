import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Ipod from "./components/Ipod";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Ipod />
    </BrowserRouter>
  </React.StrictMode>
);
